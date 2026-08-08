import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const MILESTONE_ASSIGNED_TO_FIELD_ID = "c45b0fa6-65ef-478d-a2e5-03b4af2cd7b4";

export default defineField({
  universalIdentifier: MILESTONE_ASSIGNED_TO_FIELD_ID,
  objectUniversalIdentifier: "02d7ba27-d412-4fd4-9997-380dd6b01939",
  type: FieldType.RELATION,
  name: "assignedTo",
  label: "Assigned To",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  relationTargetFieldMetadataUniversalIdentifier: "01bc7d25-f896-426b-a643-0fddbdf64553",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "assignedToId",
  },
});
