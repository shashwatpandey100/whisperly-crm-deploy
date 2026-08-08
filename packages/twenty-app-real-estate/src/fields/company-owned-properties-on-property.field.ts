import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const COMPANY_OWNED_PROPERTIES_FIELD_ID = "f2935aef-06fb-4b7a-8cb4-f98e5c6a0407";

export default defineField({
  universalIdentifier: COMPANY_OWNED_PROPERTIES_FIELD_ID,
  objectUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  type: FieldType.RELATION,
  name: "ownedProperties",
  label: "Owned Properties",
  relationTargetObjectMetadataUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  relationTargetFieldMetadataUniversalIdentifier: "6dcdfc11-4bcd-40be-8ac6-cf652fdf0d84",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
