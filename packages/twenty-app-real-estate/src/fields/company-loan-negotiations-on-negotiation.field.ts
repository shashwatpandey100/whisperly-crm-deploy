import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const COMPANY_LOAN_NEGOTIATIONS_FIELD_ID = "88965f9e-2f93-4a88-9fb0-d51a3f112bbf";

export default defineField({
  universalIdentifier: COMPANY_LOAN_NEGOTIATIONS_FIELD_ID,
  objectUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  type: FieldType.RELATION,
  name: "loanNegotiations",
  label: "Loan Negotiations",
  relationTargetObjectMetadataUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  relationTargetFieldMetadataUniversalIdentifier: "d616f6e8-8fb1-433c-9131-ade462d4c48f",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
