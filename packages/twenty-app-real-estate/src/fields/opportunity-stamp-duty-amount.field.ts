import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_STAMP_DUTY_AMOUNT_FIELD_ID = "3545aa5e-6b62-4870-9f3d-10e3c784cbbd";

export default defineField({
  universalIdentifier: OPPORTUNITY_STAMP_DUTY_AMOUNT_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.CURRENCY,
  name: "stampDutyAmount",
  label: "Stamp Duty",
  description: "5 to 7 percent, state-dependent.",
  icon: "IconStamp",
  isNullable: true,
});
