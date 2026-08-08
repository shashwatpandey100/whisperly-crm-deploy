import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_LAST_OUTBOUND_AT_FIELD_ID = "f4bbac22-8a3d-44c2-bbf2-7e28237252e1";

export default defineField({
  universalIdentifier: PERSON_LAST_OUTBOUND_AT_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.DATE_TIME,
  name: "lastOutboundAt",
  label: "Last outbound",
  description: "When your team last reached out to this person (an outbound email, or a meeting your team organized).",
  icon: "IconMessageUp",
  isNullable: true,
});
