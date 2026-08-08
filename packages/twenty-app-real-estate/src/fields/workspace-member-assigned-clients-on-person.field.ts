import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const WORKSPACE_MEMBER_ASSIGNED_CLIENTS_FIELD_ID = "9652abc1-dc58-4f1e-90d8-8ff8ed80beab";

export default defineField({
  universalIdentifier: WORKSPACE_MEMBER_ASSIGNED_CLIENTS_FIELD_ID,
  objectUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  type: FieldType.RELATION,
  name: "assignedClients",
  label: "assignedClients",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "48ecf6d4-b752-4f1d-ad27-1df0b45829de",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
