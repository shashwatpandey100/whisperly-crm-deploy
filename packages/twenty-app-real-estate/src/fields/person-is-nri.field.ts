import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_IS_NRI_FIELD_ID = "108c9763-6efb-4b27-a67b-10006c84045e";

export default defineField({
  universalIdentifier: PERSON_IS_NRI_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.BOOLEAN,
  name: "isNri",
  label: "NRI",
  description: "NRI sales attract 20 percent TDS instead of 1 percent, plus FEMA rules and usually a Power of Attorney holder in India.",
  icon: "IconWorld",
  isNullable: true,
});
