import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_POSSESSION_DATE_FIELD_ID = "4405323f-1650-471e-bb4a-4fd9e6eaa584";

export default defineField({
  universalIdentifier: OPPORTUNITY_POSSESSION_DATE_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.DATE,
  name: "possessionDate",
  label: "Possession Date",
  description: "Can be well after registration.",
  icon: "IconKey",
  isNullable: true,
});
