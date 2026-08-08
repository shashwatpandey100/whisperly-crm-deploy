import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_TDS_AMOUNT_FIELD_ID = "f05cbf5d-48f7-4f18-9299-d4478c7a8d2e";

export default defineField({
  universalIdentifier: OPPORTUNITY_TDS_AMOUNT_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.CURRENCY,
  name: "tdsAmount",
  label: "TDS Amount",
  icon: "IconPercentage",
  isNullable: true,
});
