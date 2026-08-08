import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_WHATSAPP_NUMBER_FIELD_ID = "e7ef9d10-1a03-4912-8f18-9fb9103a8a47";

export default defineField({
  universalIdentifier: PERSON_WHATSAPP_NUMBER_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.PHONES,
  name: "whatsappNumber",
  label: "WhatsApp Number",
  description: "Primary channel in India. Often different from the calling number.",
  icon: "IconBrandWhatsapp",
  isNullable: true,
});
