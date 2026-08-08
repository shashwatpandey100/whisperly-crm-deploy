import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_LEAD_SOURCE_FIELD_ID = "c4d0f02a-02d2-427f-ae36-cef8ee677c1b";

export default defineField({
  universalIdentifier: PERSON_LEAD_SOURCE_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.SELECT,
  name: "leadSource",
  label: "Lead Source",
  icon: "IconFunnel",
  isNullable: true,
  options: [
    { value: "ACRES99", label: "99acres", position: 0, color: "green" },
    { value: "MAGICBRICKS", label: "MagicBricks", position: 1, color: "turquoise" },
    { value: "HOUSING", label: "Housing.com", position: 2, color: "sky" },
    { value: "NOBROKER", label: "NoBroker", position: 3, color: "blue" },
    { value: "WEBSITE", label: "Website", position: 4, color: "purple" },
    { value: "WALK_IN", label: "Walk-in", position: 5, color: "pink" },
    { value: "REFERRAL", label: "Referral", position: 6, color: "red" },
    { value: "PAST_CLIENT", label: "Past Client", position: 7, color: "orange" },
    { value: "WHATSAPP", label: "WhatsApp", position: 8, color: "yellow" },
    { value: "INSTAGRAM", label: "Instagram", position: 9, color: "gray" },
    { value: "FACEBOOK", label: "Facebook", position: 10, color: "green" },
    { value: "GOOGLE_ADS", label: "Google Ads", position: 11, color: "turquoise" },
    { value: "HOARDING", label: "Hoarding / Signage", position: 12, color: "sky" },
    { value: "COLD_CALL", label: "Cold Call", position: 13, color: "blue" },
    { value: "SOCIETY_CONTACT", label: "Society Contact", position: 14, color: "purple" },
    { value: "OTHER", label: "Other", position: 15, color: "pink" },
  ],
});
