import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const NEGOTIATION_COUNTERPARTY_AGENT_FIELD_ID = "a2113cab-b59f-4c84-adc7-02260423ad8f";

export default defineField({
  universalIdentifier: NEGOTIATION_COUNTERPARTY_AGENT_FIELD_ID,
  objectUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  type: FieldType.RELATION,
  name: "counterpartyAgent",
  label: "Counterparty Agent",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "2fa9ce76-ceaa-42fb-b832-b6e8a6a902b4",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "counterpartyAgentId",
  },
});
