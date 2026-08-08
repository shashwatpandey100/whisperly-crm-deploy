import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_ESCROW_OR_EARNEST_NOTES_FIELD_ID = "1cf697eb-69bd-4be1-af76-09f938eedbcd";

export default defineField({
  universalIdentifier: OPPORTUNITY_ESCROW_OR_EARNEST_NOTES_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.TEXT,
  name: "escrowOrEarnestNotes",
  label: "Token / Advance Notes",
  icon: "IconNotes",
  isNullable: true,
});
