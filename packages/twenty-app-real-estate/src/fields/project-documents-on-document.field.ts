import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PROJECT_DOCUMENTS_FIELD_ID = "e5a7f84b-172d-4d8e-9789-836180914b75";

export default defineField({
  universalIdentifier: PROJECT_DOCUMENTS_FIELD_ID,
  objectUniversalIdentifier: "c0e6df6f-ea5c-46a8-8b3a-27dfb28c10ca",
  type: FieldType.RELATION,
  name: "documents",
  label: "Documents",
  relationTargetObjectMetadataUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  relationTargetFieldMetadataUniversalIdentifier: "be375da6-4cc7-4e3e-afcf-cb147a27940d",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
