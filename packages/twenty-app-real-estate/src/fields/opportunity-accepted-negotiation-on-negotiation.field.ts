import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_ACCEPTED_NEGOTIATION_FIELD_ID = "e0a5450f-9ab3-42a6-921c-ca5221935bb9";

export default defineField({
  universalIdentifier: OPPORTUNITY_ACCEPTED_NEGOTIATION_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "acceptedNegotiation",
  label: "Accepted Negotiation",
  relationTargetObjectMetadataUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  relationTargetFieldMetadataUniversalIdentifier: "a50c125c-deb1-40d6-96c7-e191b95ca7f9",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "acceptedNegotiationId",
  },
});
