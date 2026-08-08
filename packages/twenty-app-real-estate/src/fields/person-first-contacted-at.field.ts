import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_FIRST_CONTACTED_AT_FIELD_ID = "cc062de9-394e-480e-b887-4954d5decef7";

export default defineField({
  universalIdentifier: PERSON_FIRST_CONTACTED_AT_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.DATE_TIME,
  name: "firstContactedAt",
  label: "First Contacted At",
  icon: "IconPhoneCheck",
  isNullable: true,
});
