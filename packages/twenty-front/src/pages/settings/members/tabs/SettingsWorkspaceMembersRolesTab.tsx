import { SettingsRolesList } from '@/settings/roles/components/SettingsRolesList';
import { settingsRolesIsLoadingState } from '@/settings/roles/states/settingsRolesIsLoadingState';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';

export const SettingsWorkspaceMembersRolesTab = () => {
  const settingsRolesIsLoading = useAtomStateValue(settingsRolesIsLoadingState);

  return <>{!settingsRolesIsLoading && <SettingsRolesList />}</>;
};
