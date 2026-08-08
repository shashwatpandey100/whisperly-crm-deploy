import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_LAST_INBOUND_AT_FIELD_ID = "11ee7749-735d-4fcf-b127-fa6856de7ee0";

export default defineField({
  universalIdentifier: PERSON_LAST_INBOUND_AT_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.DATE_TIME,
  name: "lastInboundAt",
  label: "Last inbound",
  description: "When this person last reached out to you (an inbound email, or a meeting they organized).",
  icon: "IconMessageDown",
  isNullable: true,
});
