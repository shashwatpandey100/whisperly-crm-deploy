import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const NEGOTIATION_COUNTER_OF_FIELD_ID = "43ce7b19-0b98-43bc-9d32-32a8beaf9dba";

export default defineField({
  universalIdentifier: NEGOTIATION_COUNTER_OF_FIELD_ID,
  objectUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  type: FieldType.RELATION,
  name: "counterOf",
  label: "Counter Of",
  relationTargetObjectMetadataUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  relationTargetFieldMetadataUniversalIdentifier: "f75312ae-5603-43f0-859e-8d2762166d98",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "counterOfId",
  },
});
