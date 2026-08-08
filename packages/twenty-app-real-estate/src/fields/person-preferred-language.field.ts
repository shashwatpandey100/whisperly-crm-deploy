import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_PREFERRED_LANGUAGE_FIELD_ID = "c9b3a81d-4792-4153-bdc8-143d63280a29";

export default defineField({
  universalIdentifier: PERSON_PREFERRED_LANGUAGE_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.SELECT,
  name: "preferredLanguage",
  label: "Preferred Language",
  description: "Operational in India. Drives agent assignment.",
  icon: "IconLanguage",
  isNullable: true,
  options: [
    { value: "HINDI", label: "Hindi", position: 0, color: "green" },
    { value: "ENGLISH", label: "English", position: 1, color: "turquoise" },
    { value: "KANNADA", label: "Kannada", position: 2, color: "sky" },
    { value: "TAMIL", label: "Tamil", position: 3, color: "blue" },
    { value: "TELUGU", label: "Telugu", position: 4, color: "purple" },
    { value: "MALAYALAM", label: "Malayalam", position: 5, color: "pink" },
    { value: "MARATHI", label: "Marathi", position: 6, color: "red" },
    { value: "GUJARATI", label: "Gujarati", position: 7, color: "orange" },
    { value: "BENGALI", label: "Bengali", position: 8, color: "yellow" },
    { value: "PUNJABI", label: "Punjabi", position: 9, color: "gray" },
    { value: "URDU", label: "Urdu", position: 10, color: "green" },
    { value: "OTHER", label: "Other", position: 11, color: "turquoise" },
  ],
});
