import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_PAN_NUMBER_FIELD_ID = "46c66ed6-ec58-4e67-b490-05d9918537e1";

export default defineField({
  universalIdentifier: PERSON_PAN_NUMBER_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.TEXT,
  name: "panNumber",
  label: "PAN Number",
  description: "Required for any transaction above 50 lakh. Do NOT store Aadhaar numbers here.",
  icon: "IconId",
  isNullable: true,
});
