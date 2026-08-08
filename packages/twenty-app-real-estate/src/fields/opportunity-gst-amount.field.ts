import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_GST_AMOUNT_FIELD_ID = "8f9c862c-fe46-4f81-ae30-3ce20471455d";

export default defineField({
  universalIdentifier: OPPORTUNITY_GST_AMOUNT_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.CURRENCY,
  name: "gstAmount",
  label: "GST Amount",
  icon: "IconReceiptTax",
  isNullable: true,
});
