import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_BUDGET_MAX_FIELD_ID = "b4f33eb6-6227-43c7-a0a1-5dc625656245";

export default defineField({
  universalIdentifier: PERSON_BUDGET_MAX_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.CURRENCY,
  name: "budgetMax",
  label: "Budget To",
  icon: "IconCurrencyRupee",
  isNullable: true,
});
