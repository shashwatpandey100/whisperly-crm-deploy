import { useParams, useSearchParams } from 'react-router-dom';

import { useAuth } from '@/auth/hooks/useAuth';
import { billingCheckoutSessionState } from '@/auth/states/billingCheckoutSessionState';
import { type SocialSSOSignInUpActionType } from '@/auth/types/socialSSOSignInUp.type';
import { billingState } from '@/client-config/states/billingState';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';

export const useSignInWithMicrosoft = () => {
  const workspaceInviteHash = useParams().workspaceInviteHash;
  const [searchParams] = useSearchParams();
  const workspacePersonalInviteToken =
    searchParams.get('inviteToken') ?? undefined;
  const billing = useAtomStateValue(billingState);
  const billingCheckoutSession = useAtomStateValue(billingCheckoutSessionState);
  // Same guard as useSignInWithGoogle - never route a sign-in through a
  // plan/payment-method step when billing isn't actually enabled.
  const billingCheckoutSessionOrUndefined = billing?.isBillingEnabled
    ? billingCheckoutSession
    : undefined;

  const { signInWithMicrosoft } = useAuth();
  return {
    signInWithMicrosoft: ({
      action,
    }: {
      action: SocialSSOSignInUpActionType;
    }) =>
      signInWithMicrosoft({
        workspaceInviteHash,
        workspacePersonalInviteToken,
        billingCheckoutSession: billingCheckoutSessionOrUndefined,
        action,
      }),
  };
};
