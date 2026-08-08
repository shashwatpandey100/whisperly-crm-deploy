import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const COMPANY_MORTGAGED_PROPERTIES_FIELD_ID = "bc253b88-93df-4a18-8135-a0d2760c9aac";

export default defineField({
  universalIdentifier: COMPANY_MORTGAGED_PROPERTIES_FIELD_ID,
  objectUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  type: FieldType.RELATION,
  name: "mortgagedProperties",
  label: "Mortgaged Properties",
  relationTargetObjectMetadataUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  relationTargetFieldMetadataUniversalIdentifier: "0c9d0d05-b4ea-418d-b799-897d02305448",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
