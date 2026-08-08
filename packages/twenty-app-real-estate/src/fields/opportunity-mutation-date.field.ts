import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_MUTATION_DATE_FIELD_ID = "2a372502-e0d9-4e99-8f7c-dc0ca4eb981d";

export default defineField({
  universalIdentifier: OPPORTUNITY_MUTATION_DATE_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.DATE,
  name: "mutationDate",
  label: "Mutation / Khata Transfer",
  description: "The deal is not truly done until the khata is in the buyer's name.",
  icon: "IconFileSwap",
  isNullable: true,
});
