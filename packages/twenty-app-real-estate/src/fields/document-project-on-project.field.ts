import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const DOCUMENT_PROJECT_FIELD_ID = "be375da6-4cc7-4e3e-afcf-cb147a27940d";

export default defineField({
  universalIdentifier: DOCUMENT_PROJECT_FIELD_ID,
  objectUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  type: FieldType.RELATION,
  name: "project",
  label: "Project",
  relationTargetObjectMetadataUniversalIdentifier: "c0e6df6f-ea5c-46a8-8b3a-27dfb28c10ca",
  relationTargetFieldMetadataUniversalIdentifier: "e5a7f84b-172d-4d8e-9789-836180914b75",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "projectId",
  },
});
