import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_TDS_APPLICABLE_FIELD_ID = "fbd4143d-2ec7-439d-9468-f501e12a3e79";

export default defineField({
  universalIdentifier: OPPORTUNITY_TDS_APPLICABLE_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.BOOLEAN,
  name: "tdsApplicable",
  label: "TDS Applicable",
  description: "Mandatory above 50 lakh. 1 percent, deducted by the buyer. 20 percent for NRI sellers.",
  icon: "IconAlertTriangle",
  isNullable: true,
});
