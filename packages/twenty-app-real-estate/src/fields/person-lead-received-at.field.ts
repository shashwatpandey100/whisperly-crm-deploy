import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_LEAD_RECEIVED_AT_FIELD_ID = "f87c411a-b357-4feb-baf5-91f277dde6f5";

export default defineField({
  universalIdentifier: PERSON_LEAD_RECEIVED_AT_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.DATE_TIME,
  name: "leadReceivedAt",
  label: "Lead Received At",
  description: "With First Contacted At, this computes speed-to-lead, the strongest conversion predictor.",
  icon: "IconClockPlay",
  isNullable: true,
});
