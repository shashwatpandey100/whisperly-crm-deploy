import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_VASTU_IMPORTANT_FIELD_ID = "77a546f4-a76d-472c-8cfa-843489bd4aa5";

export default defineField({
  universalIdentifier: PERSON_VASTU_IMPORTANT_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.BOOLEAN,
  name: "vastuImportant",
  label: "Vastu Important",
  icon: "IconCompass",
  isNullable: true,
});
