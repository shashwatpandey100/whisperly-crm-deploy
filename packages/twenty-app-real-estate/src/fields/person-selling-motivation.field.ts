import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_SELLING_MOTIVATION_FIELD_ID = "88fd5549-136d-4e3f-8281-9ed5820de4ed";

export default defineField({
  universalIdentifier: PERSON_SELLING_MOTIVATION_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.TEXT,
  name: "sellingMotivation",
  label: "Selling Motivation",
  icon: "IconBulb",
  isNullable: true,
});
