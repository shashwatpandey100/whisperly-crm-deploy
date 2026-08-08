import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_REPRESENTATION_SIDE_FIELD_ID = "ad229509-83e0-4bde-81f5-76cc1a3d9950";

export default defineField({
  universalIdentifier: OPPORTUNITY_REPRESENTATION_SIDE_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.SELECT,
  name: "representationSide",
  label: "We Represent",
  icon: "IconUserCheck",
  isNullable: true,
  options: [
    { value: "SELLER", label: "Seller Side", position: 0, color: "blue" },
    { value: "BUYER", label: "Buyer Side", position: 1, color: "green" },
    { value: "BOTH", label: "Both Sides", position: 2, color: "orange" },
  ],
});
