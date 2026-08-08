import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const LISTING_CO_AGENT_FIELD_ID = "0c0fe65b-98c2-42d4-8742-a772665f9090";

export default defineField({
  universalIdentifier: LISTING_CO_AGENT_FIELD_ID,
  objectUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  type: FieldType.RELATION,
  name: "coAgent",
  label: "Co-Agent",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  relationTargetFieldMetadataUniversalIdentifier: "5a4fb4a8-b004-488e-b37e-10669cbda26d",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "coAgentId",
  },
});
