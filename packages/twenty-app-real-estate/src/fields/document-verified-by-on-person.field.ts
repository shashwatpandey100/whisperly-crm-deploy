import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const DOCUMENT_VERIFIED_BY_FIELD_ID = "48f5f84a-0bc4-4ed0-86bc-858d314df12a";

export default defineField({
  universalIdentifier: DOCUMENT_VERIFIED_BY_FIELD_ID,
  objectUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  type: FieldType.RELATION,
  name: "verifiedBy",
  label: "Verified By",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "a46268e2-ef24-4978-b96a-a0ead6c8b7a9",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "verifiedById",
  },
});
