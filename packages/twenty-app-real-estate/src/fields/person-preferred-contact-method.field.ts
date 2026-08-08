import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_PREFERRED_CONTACT_METHOD_FIELD_ID = "ed9b4f55-7def-40db-a9f5-2b4b6dfd25c8";

export default defineField({
  universalIdentifier: PERSON_PREFERRED_CONTACT_METHOD_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.SELECT,
  name: "preferredContactMethod",
  label: "Preferred Contact",
  icon: "IconMessageDots",
  isNullable: true,
  options: [
    { value: "CALL", label: "Call", position: 0, color: "green" },
    { value: "WHATSAPP", label: "WhatsApp", position: 1, color: "turquoise" },
    { value: "EMAIL", label: "Email", position: 2, color: "sky" },
    { value: "SMS", label: "SMS", position: 3, color: "blue" },
  ],
});
