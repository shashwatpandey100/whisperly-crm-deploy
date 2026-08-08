import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_LEAD_STATUS_FIELD_ID = "92b21a0e-cbab-4feb-8e36-557bb258ab5b";

export default defineField({
  universalIdentifier: PERSON_LEAD_STATUS_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.SELECT,
  name: "leadStatus",
  label: "Lead Status",
  icon: "IconProgress",
  isNullable: true,
  options: [
    { value: "NEW", label: "New", position: 0, color: "red" },
    { value: "ATTEMPTING", label: "Attempting Contact", position: 1, color: "orange" },
    { value: "CONTACTED", label: "Contacted", position: 2, color: "yellow" },
    { value: "VISIT_SCHEDULED", label: "Site Visit Scheduled", position: 3, color: "blue" },
    { value: "VISIT_DONE", label: "Site Visit Done", position: 4, color: "sky" },
    { value: "NEGOTIATING", label: "Negotiating", position: 5, color: "turquoise" },
    { value: "TOKEN_PAID", label: "Token Paid", position: 6, color: "green" },
    { value: "CLOSED_WON", label: "Closed Won", position: 7, color: "green" },
    { value: "NURTURE", label: "Nurture", position: 8, color: "purple" },
    { value: "DEAD", label: "Dead", position: 9, color: "gray" },
  ],
});
