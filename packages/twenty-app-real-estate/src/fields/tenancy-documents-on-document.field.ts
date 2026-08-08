import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const TENANCY_DOCUMENTS_FIELD_ID = "90fcb428-4829-45e1-b551-ce2c8f83731f";

export default defineField({
  universalIdentifier: TENANCY_DOCUMENTS_FIELD_ID,
  objectUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  type: FieldType.RELATION,
  name: "documents",
  label: "Documents",
  relationTargetObjectMetadataUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  relationTargetFieldMetadataUniversalIdentifier: "13f1fa6b-003e-4ddf-b371-86083098bf34",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
