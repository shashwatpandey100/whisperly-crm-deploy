import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_VERIFIED_DOCUMENTS_FIELD_ID = "a46268e2-ef24-4978-b96a-a0ead6c8b7a9";

export default defineField({
  universalIdentifier: PERSON_VERIFIED_DOCUMENTS_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "verifiedDocuments",
  label: "Verified Documents",
  relationTargetObjectMetadataUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  relationTargetFieldMetadataUniversalIdentifier: "48f5f84a-0bc4-4ed0-86bc-858d314df12a",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
