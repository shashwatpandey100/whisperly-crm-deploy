import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const LISTING_DOCUMENTS_FIELD_ID = "64ffeb8c-d3c6-40b0-9d16-0dd3444fe844";

export default defineField({
  universalIdentifier: LISTING_DOCUMENTS_FIELD_ID,
  objectUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  type: FieldType.RELATION,
  name: "documents",
  label: "Documents",
  relationTargetObjectMetadataUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  relationTargetFieldMetadataUniversalIdentifier: "1ef9fe4e-336a-497d-9ace-ac5956159355",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
