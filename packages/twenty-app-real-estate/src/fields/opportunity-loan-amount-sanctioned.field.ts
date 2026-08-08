import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_LOAN_AMOUNT_SANCTIONED_FIELD_ID = "7ae8cc7c-9e15-4210-a352-ace02fdce137";

export default defineField({
  universalIdentifier: OPPORTUNITY_LOAN_AMOUNT_SANCTIONED_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.CURRENCY,
  name: "loanAmountSanctioned",
  label: "Loan Sanctioned",
  icon: "IconBuildingBank",
  isNullable: true,
});
