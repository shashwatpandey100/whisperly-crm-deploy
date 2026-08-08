import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_AGREEMENT_TO_SELL_DATE_FIELD_ID = "32528d31-98db-48a7-b25c-5e0055ce41f5";

export default defineField({
  universalIdentifier: OPPORTUNITY_AGREEMENT_TO_SELL_DATE_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.DATE,
  name: "agreementToSellDate",
  label: "Agreement to Sell Date",
  icon: "IconFileText",
  isNullable: true,
});
