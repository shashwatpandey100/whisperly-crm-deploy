import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const NEGOTIATION_TRANSACTION_FIELD_ID = "a50c125c-deb1-40d6-96c7-e191b95ca7f9";

export default defineField({
  universalIdentifier: NEGOTIATION_TRANSACTION_FIELD_ID,
  objectUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  type: FieldType.RELATION,
  name: "transaction",
  label: "Transaction",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "e0a5450f-9ab3-42a6-921c-ca5221935bb9",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
