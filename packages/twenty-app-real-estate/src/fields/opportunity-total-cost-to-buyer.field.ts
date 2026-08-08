import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_TOTAL_COST_TO_BUYER_FIELD_ID = "1b4a8e11-3823-4c65-8f09-dd85a934f00c";

export default defineField({
  universalIdentifier: OPPORTUNITY_TOTAL_COST_TO_BUYER_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.CURRENCY,
  name: "totalCostToBuyer",
  label: "Total Cost to Buyer",
  description: "Agreement value plus stamp duty, registration, GST and charges.",
  icon: "IconSum",
  isNullable: true,
});
