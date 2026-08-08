import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_DOCUMENTS_FIELD_ID = "0b7c4bfe-42ce-407c-9f79-9274d22cb9ad";

export default defineField({
  universalIdentifier: OPPORTUNITY_DOCUMENTS_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "documents",
  label: "Documents",
  relationTargetObjectMetadataUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  relationTargetFieldMetadataUniversalIdentifier: "aaa50b43-b3b5-46da-b635-e64a272458e1",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
