import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_OWNED_PROPERTIES_FIELD_ID = "cb274b95-9d38-400a-a3ed-fdd15d027374";

export default defineField({
  universalIdentifier: PERSON_OWNED_PROPERTIES_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "ownedProperties",
  label: "Owned Properties",
  relationTargetObjectMetadataUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  relationTargetFieldMetadataUniversalIdentifier: "8633bc6d-1ccb-4712-b7b3-cac2ec1da1fe",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
