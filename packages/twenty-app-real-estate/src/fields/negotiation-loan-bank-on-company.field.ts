import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const NEGOTIATION_LOAN_BANK_FIELD_ID = "d616f6e8-8fb1-433c-9131-ade462d4c48f";

export default defineField({
  universalIdentifier: NEGOTIATION_LOAN_BANK_FIELD_ID,
  objectUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  type: FieldType.RELATION,
  name: "loanBank",
  label: "Loan Bank",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  relationTargetFieldMetadataUniversalIdentifier: "88965f9e-2f93-4a88-9fb0-d51a3f112bbf",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "loanBankId",
  },
});
