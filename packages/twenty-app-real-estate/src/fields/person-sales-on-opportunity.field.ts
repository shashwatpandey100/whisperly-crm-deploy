import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_SALES_FIELD_ID = "34d615a7-9646-47b2-a169-54dca812146b";

export default defineField({
  universalIdentifier: PERSON_SALES_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "sales",
  label: "Sales",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "6b02f3a8-7366-4d40-9be2-65e4894299a7",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
