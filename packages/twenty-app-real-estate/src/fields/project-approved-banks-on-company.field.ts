import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const PROJECT_APPROVED_BANKS_FIELD_ID = "5c769665-7820-45db-a38e-e0289e3467bc";

export default defineField({
  universalIdentifier: PROJECT_APPROVED_BANKS_FIELD_ID,
  objectUniversalIdentifier: "c0e6df6f-ea5c-46a8-8b3a-27dfb28c10ca",
  type: FieldType.RELATION,
  name: "approvedBanks",
  label: "Approved Banks",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  relationTargetFieldMetadataUniversalIdentifier: "cf4b8226-4ad6-4438-a65a-75a474cc9dc4",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "approvedBanksId",
  },
});
