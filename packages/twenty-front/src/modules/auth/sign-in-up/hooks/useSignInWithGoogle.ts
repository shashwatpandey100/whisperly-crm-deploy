import { useParams, useSearchParams } from 'react-router-dom';

import { useAuth } from '@/auth/hooks/useAuth';
import { type BillingCheckoutSession } from '@/auth/types/billingCheckoutSession.type';
import { type SocialSSOSignInUpActionType } from '@/auth/types/socialSSOSignInUp.type';
import { billingState } from '@/client-config/states/billingState';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import {
  BillingPlanKey,
  SubscriptionInterval,
} from '~/generated-metadata/graphql';

export const useSignInWithGoogle = () => {
  const workspaceInviteHash = useParams().workspaceInviteHash;
  const [searchParams] = useSearchParams();
  const workspacePersonalInviteToken =
    searchParams.get('inviteToken') ?? undefined;
  const billing = useAtomStateValue(billingState);
  // Only self-hosted instances with billing genuinely enabled should ever
  // route through a plan/payment-method step - otherwise this unconditionally
  // required a PRO plan checkout for every Google sign-in, including plain
  // joins to an existing workspace, which loops forever since there's no
  // billing flow to actually complete.
  const billingCheckoutSession: BillingCheckoutSession | undefined =
    billing?.isBillingEnabled
      ? {
          plan: BillingPlanKey.PRO,
          interval: SubscriptionInterval.Month,
          requirePaymentMethod: true,
        }
      : undefined;

  const { signInWithGoogle } = useAuth();

  return {
    signInWithGoogle: ({ action }: { action: SocialSSOSignInUpActionType }) =>
      signInWithGoogle({
        workspaceInviteHash,
        workspacePersonalInviteToken,
        billingCheckoutSession,
        action,
      }),
  };
};
