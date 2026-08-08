import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const ENQUIRY_AGENT_FIELD_ID = "3827dd50-6514-4ee3-af38-b06c9f32c080";

export default defineField({
  universalIdentifier: ENQUIRY_AGENT_FIELD_ID,
  objectUniversalIdentifier: "5e72b274-378e-4b8d-9bb2-fc8dd2335736",
  type: FieldType.RELATION,
  name: "agent",
  label: "Agent",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  relationTargetFieldMetadataUniversalIdentifier: "e1c60228-4b74-430a-8b2d-f85b553fd552",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "agentId",
  },
});
