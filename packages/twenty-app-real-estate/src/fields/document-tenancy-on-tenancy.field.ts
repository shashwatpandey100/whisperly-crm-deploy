import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const DOCUMENT_TENANCY_FIELD_ID = "13f1fa6b-003e-4ddf-b371-86083098bf34";

export default defineField({
  universalIdentifier: DOCUMENT_TENANCY_FIELD_ID,
  objectUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  type: FieldType.RELATION,
  name: "tenancy",
  label: "Tenancy",
  relationTargetObjectMetadataUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  relationTargetFieldMetadataUniversalIdentifier: "90fcb428-4829-45e1-b551-ce2c8f83731f",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "tenancyId",
  },
});
