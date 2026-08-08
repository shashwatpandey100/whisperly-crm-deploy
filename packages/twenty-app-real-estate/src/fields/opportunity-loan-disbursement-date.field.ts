import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_LOAN_DISBURSEMENT_DATE_FIELD_ID = "42007f1b-d174-41ca-aa90-dfab2a624619";

export default defineField({
  universalIdentifier: OPPORTUNITY_LOAN_DISBURSEMENT_DATE_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.DATE,
  name: "loanDisbursementDate",
  label: "Loan Disbursement Date",
  icon: "IconCash",
  isNullable: true,
});
