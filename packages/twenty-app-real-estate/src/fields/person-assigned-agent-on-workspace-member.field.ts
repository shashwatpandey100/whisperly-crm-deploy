import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const PERSON_ASSIGNED_AGENT_FIELD_ID = "48ecf6d4-b752-4f1d-ad27-1df0b45829de";

export default defineField({
  universalIdentifier: PERSON_ASSIGNED_AGENT_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "assignedAgent",
  label: "Assigned Agent",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  relationTargetFieldMetadataUniversalIdentifier: "9652abc1-dc58-4f1e-90d8-8ff8ed80beab",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "assignedAgentId",
  },
});
