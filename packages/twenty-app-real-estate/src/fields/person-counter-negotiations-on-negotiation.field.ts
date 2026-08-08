import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_COUNTER_NEGOTIATIONS_FIELD_ID = "2fa9ce76-ceaa-42fb-b832-b6e8a6a902b4";

export default defineField({
  universalIdentifier: PERSON_COUNTER_NEGOTIATIONS_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "counterNegotiations",
  label: "Counter Negotiations",
  relationTargetObjectMetadataUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  relationTargetFieldMetadataUniversalIdentifier: "a2113cab-b59f-4c84-adc7-02260423ad8f",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
