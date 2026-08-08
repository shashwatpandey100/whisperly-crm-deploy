import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const NEGOTIATION_AGENT_FIELD_ID = "17a5b786-22bf-404d-90e0-a223559cf3be";

export default defineField({
  universalIdentifier: NEGOTIATION_AGENT_FIELD_ID,
  objectUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  type: FieldType.RELATION,
  name: "agent",
  label: "Agent",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  relationTargetFieldMetadataUniversalIdentifier: "df21636f-347c-4a72-b67c-f40a66288872",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "agentId",
  },
});
