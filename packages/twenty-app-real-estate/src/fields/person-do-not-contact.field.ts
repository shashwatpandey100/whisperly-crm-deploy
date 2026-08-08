import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_DO_NOT_CONTACT_FIELD_ID = "7baef699-62ca-44cb-a946-80b36eae901f";

export default defineField({
  universalIdentifier: PERSON_DO_NOT_CONTACT_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.BOOLEAN,
  name: "doNotContact",
  label: "Do Not Contact",
  icon: "IconPhoneOff",
  isNullable: true,
});
