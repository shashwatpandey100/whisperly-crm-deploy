import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const PROPERTY_OWNER_COMPANY_FIELD_ID = "6dcdfc11-4bcd-40be-8ac6-cf652fdf0d84";

export default defineField({
  universalIdentifier: PROPERTY_OWNER_COMPANY_FIELD_ID,
  objectUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  type: FieldType.RELATION,
  name: "ownerCompany",
  label: "Owner (Company)",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  relationTargetFieldMetadataUniversalIdentifier: "f2935aef-06fb-4b7a-8cb4-f98e5c6a0407",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "ownerCompanyId",
  },
});
