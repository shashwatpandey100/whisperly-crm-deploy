import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const NEGOTIATION_COUNTERS_FIELD_ID = "f75312ae-5603-43f0-859e-8d2762166d98";

export default defineField({
  universalIdentifier: NEGOTIATION_COUNTERS_FIELD_ID,
  objectUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  type: FieldType.RELATION,
  name: "counters",
  label: "Counters",
  relationTargetObjectMetadataUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  relationTargetFieldMetadataUniversalIdentifier: "43ce7b19-0b98-43bc-9d32-32a8beaf9dba",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
