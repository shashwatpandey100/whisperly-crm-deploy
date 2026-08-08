import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PROPERTY_DOCUMENTS_FIELD_ID = "dc385038-aec4-40c4-8d09-078dfbf481c2";

export default defineField({
  universalIdentifier: PROPERTY_DOCUMENTS_FIELD_ID,
  objectUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  type: FieldType.RELATION,
  name: "documents",
  label: "Documents",
  relationTargetObjectMetadataUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  relationTargetFieldMetadataUniversalIdentifier: "c6754464-68c0-4c18-8159-57c321de4445",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
