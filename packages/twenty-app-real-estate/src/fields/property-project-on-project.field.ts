import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const PROPERTY_PROJECT_FIELD_ID = "33bf3856-6c45-4f7b-9343-0a612e5b4676";

export default defineField({
  universalIdentifier: PROPERTY_PROJECT_FIELD_ID,
  objectUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  type: FieldType.RELATION,
  name: "project",
  label: "Project",
  relationTargetObjectMetadataUniversalIdentifier: "c0e6df6f-ea5c-46a8-8b3a-27dfb28c10ca",
  relationTargetFieldMetadataUniversalIdentifier: "e526b949-19ee-4fb9-b419-6f4d6ea8b1c4",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "projectId",
  },
});
