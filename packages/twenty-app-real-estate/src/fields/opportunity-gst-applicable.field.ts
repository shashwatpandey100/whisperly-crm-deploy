import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_GST_APPLICABLE_FIELD_ID = "0e054d9f-8da4-429d-b41c-8956cdbd4bde";

export default defineField({
  universalIdentifier: OPPORTUNITY_GST_APPLICABLE_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.BOOLEAN,
  name: "gstApplicable",
  label: "GST Applicable",
  description: "Under-construction only. Nil once the Occupancy Certificate is issued.",
  icon: "IconReceiptTax",
  isNullable: true,
});
