import { defineRole, SystemPermissionFlag } from 'twenty-sdk/define';

export const AGENCY_ADMIN_ROLE_UNIVERSAL_IDENTIFIER = "e2234ca0-88a7-47a7-a3bb-e124c3fdc70e";

export default defineRole({
  universalIdentifier: AGENCY_ADMIN_ROLE_UNIVERSAL_IDENTIFIER,
  label: "Agency Admin",
  description: "Manages the agency's team and day-to-day settings. No access to the data model, workflows, roles, security, API keys, or billing.",
  canUpdateAllSettings: false,
  canAccessAllTools: false,
  canReadAllObjectRecords: true,
  canUpdateAllObjectRecords: true,
  canSoftDeleteAllObjectRecords: true,
  canDestroyAllObjectRecords: false,
  canBeAssignedToUsers: true,
  canBeAssignedToAgents: false,
  canBeAssignedToApiKeys: false,
  objectPermissions: [
    { objectUniversalIdentifier: "20202020-62be-406c-b9ca-8caa50d51392", canReadObjectRecords: false, canUpdateObjectRecords: false, canSoftDeleteObjectRecords: false, canDestroyObjectRecords: false },
    { objectUniversalIdentifier: "20202020-4e28-4e95-a9d7-6c00874f843c", canReadObjectRecords: false, canUpdateObjectRecords: false, canSoftDeleteObjectRecords: false, canDestroyObjectRecords: false },
    { objectUniversalIdentifier: "20202020-d65d-4ab9-9344-d77bfb376a3d", canReadObjectRecords: false, canUpdateObjectRecords: false, canSoftDeleteObjectRecords: false, canDestroyObjectRecords: false },
  ],
  permissionFlagUniversalIdentifiers: [
    SystemPermissionFlag.WORKSPACE_MEMBERS,
    SystemPermissionFlag.WORKSPACE,
    SystemPermissionFlag.VIEWS,
    SystemPermissionFlag.LAYOUTS,
    SystemPermissionFlag.IMPORT_CSV,
    SystemPermissionFlag.EXPORT_CSV,
    SystemPermissionFlag.AI,
    SystemPermissionFlag.CONNECTED_ACCOUNTS,
    SystemPermissionFlag.PROFILE_INFORMATION,
    SystemPermissionFlag.UPLOAD_FILE,
    SystemPermissionFlag.DOWNLOAD_FILE,
    SystemPermissionFlag.SEND_EMAIL_TOOL,
    SystemPermissionFlag.CREATE_CALENDAR_EVENT_TOOL,
  ],
});
