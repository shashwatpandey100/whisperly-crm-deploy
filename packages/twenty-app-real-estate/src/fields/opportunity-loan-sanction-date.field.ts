import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_LOAN_SANCTION_DATE_FIELD_ID = "1b7b64c1-c940-4282-bbcf-125eb7632a53";

export default defineField({
  universalIdentifier: OPPORTUNITY_LOAN_SANCTION_DATE_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.DATE,
  name: "loanSanctionDate",
  label: "Loan Sanction Date",
  icon: "IconCalendarCheck",
  isNullable: true,
});
