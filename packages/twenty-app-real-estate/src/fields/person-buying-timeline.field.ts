import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_BUYING_TIMELINE_FIELD_ID = "4b566c7c-769d-4d19-b1cb-7843c89c3afe";

export default defineField({
  universalIdentifier: PERSON_BUYING_TIMELINE_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.SELECT,
  name: "buyingTimeline",
  label: "Timeline",
  icon: "IconClock",
  isNullable: true,
  options: [
    { value: "IMMEDIATE", label: "Immediate", position: 0, color: "red" },
    { value: "M1_3", label: "1-3 months", position: 1, color: "orange" },
    { value: "M3_6", label: "3-6 months", position: 2, color: "yellow" },
    { value: "M6_12", label: "6-12 months", position: 3, color: "blue" },
    { value: "EXPLORING", label: "Just Exploring", position: 4, color: "gray" },
  ],
});
