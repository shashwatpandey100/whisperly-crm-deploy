import { defineApplicationRole, SystemPermissionFlag } from 'twenty-sdk/define';

export const AGENT_ROLE_UNIVERSAL_IDENTIFIER = "ae8b0946-ea4f-41aa-947a-4c2a6d70a3c5";

// Marked as the app's default role (defineApplicationRole) since something
// must satisfy that requirement - Agent is the safe, least-privileged choice
// for whichever purpose the SDK uses this for (e.g. default role for
// app-defined agents/functions, not the human-invite default role, which
// isn't settable via the manifest at all - see the per-client runbook).
export default defineApplicationRole({
  universalIdentifier: AGENT_ROLE_UNIVERSAL_IDENTIFIER,
  label: "Agent",
  description: "Day-to-day CRM user: leads, properties, listings, deals, tasks. No admin or settings access.",
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
    SystemPermissionFlag.VIEWS,
    SystemPermissionFlag.PROFILE_INFORMATION,
    SystemPermissionFlag.UPLOAD_FILE,
    SystemPermissionFlag.DOWNLOAD_FILE,
    SystemPermissionFlag.CONNECTED_ACCOUNTS,
    SystemPermissionFlag.SEND_EMAIL_TOOL,
    SystemPermissionFlag.CREATE_CALENDAR_EVENT_TOOL,
  ],
});
