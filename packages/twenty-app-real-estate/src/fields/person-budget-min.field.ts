import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_BUDGET_MIN_FIELD_ID = "fc03223e-fdcd-44a9-9831-f222ce402a30";

export default defineField({
  universalIdentifier: PERSON_BUDGET_MIN_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.CURRENCY,
  name: "budgetMin",
  label: "Budget From",
  icon: "IconCurrencyRupee",
  isNullable: true,
});
