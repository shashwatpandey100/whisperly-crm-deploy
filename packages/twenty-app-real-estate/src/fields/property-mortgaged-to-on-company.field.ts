import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const PROPERTY_MORTGAGED_TO_FIELD_ID = "0c9d0d05-b4ea-418d-b799-897d02305448";

export default defineField({
  universalIdentifier: PROPERTY_MORTGAGED_TO_FIELD_ID,
  objectUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  type: FieldType.RELATION,
  name: "mortgagedTo",
  label: "Mortgaged To",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  relationTargetFieldMetadataUniversalIdentifier: "bc253b88-93df-4a18-8135-a0d2760c9aac",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "mortgagedToId",
  },
});
