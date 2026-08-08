import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const ENQUIRY_CLIENT_FIELD_ID = "d24bd095-0397-42a0-955b-1e4ca7d7d925";

export default defineField({
  universalIdentifier: ENQUIRY_CLIENT_FIELD_ID,
  objectUniversalIdentifier: "5e72b274-378e-4b8d-9bb2-fc8dd2335736",
  type: FieldType.RELATION,
  name: "client",
  label: "Client",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "bbdab24d-742b-4ebd-90b8-6edf15ed6f8f",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "clientId",
  },
});
