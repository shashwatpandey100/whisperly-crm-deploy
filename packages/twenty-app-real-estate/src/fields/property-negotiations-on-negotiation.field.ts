import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PROPERTY_NEGOTIATIONS_FIELD_ID = "1d7c4b4a-f1e4-4230-bdea-f3fbe34057de";

export default defineField({
  universalIdentifier: PROPERTY_NEGOTIATIONS_FIELD_ID,
  objectUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  type: FieldType.RELATION,
  name: "negotiations",
  label: "Negotiations",
  relationTargetObjectMetadataUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  relationTargetFieldMetadataUniversalIdentifier: "d91f5d62-ef82-4827-bff3-b2dafe786c31",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
