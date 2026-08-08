import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_COUNTERPARTY_AGENT_FIELD_ID = "10bebcd9-1208-4fa1-aa62-70eaf92bd1d2";

export default defineField({
  universalIdentifier: OPPORTUNITY_COUNTERPARTY_AGENT_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "counterpartyAgent",
  label: "Counterparty Agent",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "1e2c74ab-cf61-4323-b1f9-f3e2e7c4e53a",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "counterpartyAgentId",
  },
});
