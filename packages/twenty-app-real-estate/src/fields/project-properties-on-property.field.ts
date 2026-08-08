import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PROJECT_PROPERTIES_FIELD_ID = "e526b949-19ee-4fb9-b419-6f4d6ea8b1c4";

export default defineField({
  universalIdentifier: PROJECT_PROPERTIES_FIELD_ID,
  objectUniversalIdentifier: "c0e6df6f-ea5c-46a8-8b3a-27dfb28c10ca",
  type: FieldType.RELATION,
  name: "properties",
  label: "Properties",
  relationTargetObjectMetadataUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  relationTargetFieldMetadataUniversalIdentifier: "33bf3856-6c45-4f7b-9343-0a612e5b4676",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
