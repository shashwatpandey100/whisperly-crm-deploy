import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_PAYMENT_PLAN_FIELD_ID = "d0a864c2-1f38-460f-9b3a-513a58b4ee84";

export default defineField({
  universalIdentifier: OPPORTUNITY_PAYMENT_PLAN_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.SELECT,
  name: "paymentPlan",
  label: "Payment Plan",
  icon: "IconTimeline",
  isNullable: true,
  options: [
    { value: "FULL_PAYMENT", label: "Full Payment", position: 0, color: "green" },
    { value: "CLP", label: "Construction Linked (CLP)", position: 1, color: "turquoise" },
    { value: "POSSESSION_LINKED", label: "Possession Linked", position: 2, color: "sky" },
    { value: "SUBVENTION", label: "Subvention", position: 3, color: "blue" },
    { value: "FLEXI", label: "Flexi", position: 4, color: "purple" },
  ],
});
