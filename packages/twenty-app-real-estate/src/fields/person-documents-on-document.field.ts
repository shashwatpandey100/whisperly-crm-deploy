import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_DOCUMENTS_FIELD_ID = "fdf486e4-84ca-45fd-a246-c53ceaccffbb";

export default defineField({
  universalIdentifier: PERSON_DOCUMENTS_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "documents",
  label: "Documents",
  relationTargetObjectMetadataUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  relationTargetFieldMetadataUniversalIdentifier: "e39a64fa-0511-4d5a-97a3-48fce88ca1c4",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
