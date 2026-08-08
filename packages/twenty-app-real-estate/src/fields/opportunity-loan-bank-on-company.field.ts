import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_LOAN_BANK_FIELD_ID = "b4021169-ac38-4e1f-b907-7fd271cc9dcf";

export default defineField({
  universalIdentifier: OPPORTUNITY_LOAN_BANK_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "loanBank",
  label: "Loan Bank",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  relationTargetFieldMetadataUniversalIdentifier: "00649863-0405-47a4-a573-cb8627bd381c",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "loanBankId",
  },
});
