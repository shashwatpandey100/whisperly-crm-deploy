import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const WORKSPACE_MEMBER_MILESTONES_FIELD_ID = "01bc7d25-f896-426b-a643-0fddbdf64553";

export default defineField({
  universalIdentifier: WORKSPACE_MEMBER_MILESTONES_FIELD_ID,
  objectUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  type: FieldType.RELATION,
  name: "milestones",
  label: "milestones",
  relationTargetObjectMetadataUniversalIdentifier: "02d7ba27-d412-4fd4-9997-380dd6b01939",
  relationTargetFieldMetadataUniversalIdentifier: "c45b0fa6-65ef-478d-a2e5-03b4af2cd7b4",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
