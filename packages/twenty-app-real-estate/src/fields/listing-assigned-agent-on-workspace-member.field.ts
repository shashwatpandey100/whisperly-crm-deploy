import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const LISTING_ASSIGNED_AGENT_FIELD_ID = "56465b73-5abe-4612-a0a5-4b7987f86768";

export default defineField({
  universalIdentifier: LISTING_ASSIGNED_AGENT_FIELD_ID,
  objectUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  type: FieldType.RELATION,
  name: "assignedAgent",
  label: "Assigned Agent",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  relationTargetFieldMetadataUniversalIdentifier: "cf75af35-51d6-4227-8910-b1f8e7bfffc4",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "assignedAgentId",
  },
});
