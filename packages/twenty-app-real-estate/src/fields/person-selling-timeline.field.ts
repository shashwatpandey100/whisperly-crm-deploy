import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_SELLING_TIMELINE_FIELD_ID = "61d5946a-1606-4bef-a742-75b09251b4e6";

export default defineField({
  universalIdentifier: PERSON_SELLING_TIMELINE_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.SELECT,
  name: "sellingTimeline",
  label: "Selling Timeline",
  icon: "IconClock",
  isNullable: true,
  options: [
    { value: "IMMEDIATE", label: "Immediate", position: 0, color: "red" },
    { value: "M1_3", label: "1-3 months", position: 1, color: "orange" },
    { value: "M3_6", label: "3-6 months", position: 2, color: "yellow" },
    { value: "M6_PLUS", label: "6+ months", position: 3, color: "blue" },
    { value: "EXPLORING", label: "Just Exploring", position: 4, color: "gray" },
  ],
});
