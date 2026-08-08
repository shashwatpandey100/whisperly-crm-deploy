import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_LOAN_PRE_APPROVED_FIELD_ID = "8dd773eb-e0c3-408c-bcb7-b4117e43ea77";

export default defineField({
  universalIdentifier: PERSON_LOAN_PRE_APPROVED_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.BOOLEAN,
  name: "loanPreApproved",
  label: "Loan Pre-Approved",
  icon: "IconCircleCheck",
  isNullable: true,
});
