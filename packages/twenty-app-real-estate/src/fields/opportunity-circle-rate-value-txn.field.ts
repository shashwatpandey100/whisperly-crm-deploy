import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_CIRCLE_RATE_VALUE_TXN_FIELD_ID = "e53d3942-d18a-42c1-ae15-62e4472d8638";

export default defineField({
  universalIdentifier: OPPORTUNITY_CIRCLE_RATE_VALUE_TXN_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.CURRENCY,
  name: "circleRateValueTxn",
  label: "Circle Rate Value",
  description: "Stamp duty is charged on whichever is higher, this or the agreement value.",
  icon: "IconReceiptTax",
  isNullable: true,
});
