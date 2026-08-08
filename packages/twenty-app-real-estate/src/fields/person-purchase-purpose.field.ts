import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_PURCHASE_PURPOSE_FIELD_ID = "cf3d38c7-6bb7-4a50-8232-96e341addf6a";

export default defineField({
  universalIdentifier: PERSON_PURCHASE_PURPOSE_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.SELECT,
  name: "purchasePurpose",
  label: "Purpose",
  icon: "IconTarget",
  isNullable: true,
  options: [
    { value: "SELF_USE", label: "Self Use", position: 0, color: "green" },
    { value: "INVESTMENT", label: "Investment", position: 1, color: "purple" },
    { value: "RENTAL_INCOME", label: "Rental Income", position: 2, color: "blue" },
    { value: "SECOND_HOME", label: "Second Home", position: 3, color: "sky" },
  ],
});
