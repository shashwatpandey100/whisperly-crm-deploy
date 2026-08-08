import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_COUNTERPARTY_AGENCY_FIELD_ID = "96e7b753-03d0-4e99-8d46-961ef6302969";

export default defineField({
  universalIdentifier: OPPORTUNITY_COUNTERPARTY_AGENCY_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "counterpartyAgency",
  label: "Counterparty Agency",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  relationTargetFieldMetadataUniversalIdentifier: "8990ad93-9413-4893-b9b4-537a23d5610c",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "counterpartyAgencyId",
  },
});
