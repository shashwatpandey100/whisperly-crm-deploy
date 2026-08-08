import { defineField, FieldType } from 'twenty-sdk/define';

export const COMPANY_GST_NUMBER_FIELD_ID = "cfdcd3f8-315a-4b40-b3d1-362942aac0d0";

export default defineField({
  universalIdentifier: COMPANY_GST_NUMBER_FIELD_ID,
  objectUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  type: FieldType.TEXT,
  name: "gstNumber",
  label: "GST Number",
  icon: "IconReceiptTax",
  isNullable: true,
});
