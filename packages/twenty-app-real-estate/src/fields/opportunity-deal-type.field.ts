import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_DEAL_TYPE_FIELD_ID = "ca6a3343-0d77-4f3a-9e44-c6f8fe8a90d6";

export default defineField({
  universalIdentifier: OPPORTUNITY_DEAL_TYPE_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.SELECT,
  name: "dealType",
  label: "Deal Type",
  icon: "IconExchange",
  isNullable: true,
  options: [
    { value: "SALE", label: "Sale", position: 0, color: "green" },
    { value: "RENT", label: "Rent", position: 1, color: "blue" },
    { value: "LEASE", label: "Lease", position: 2, color: "purple" },
  ],
});
