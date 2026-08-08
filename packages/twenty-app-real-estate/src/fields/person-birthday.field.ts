import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_BIRTHDAY_FIELD_ID = "af721a60-c4d9-4635-ad9d-200761bb95c4";

export default defineField({
  universalIdentifier: PERSON_BIRTHDAY_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.DATE,
  name: "birthday",
  label: "Birthday",
  icon: "IconCake",
  isNullable: true,
});
