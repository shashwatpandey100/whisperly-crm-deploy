import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const TENANCY_MANAGED_BY_FIELD_ID = "e60fbd8a-7cc8-482c-921d-d9131ee96441";

export default defineField({
  universalIdentifier: TENANCY_MANAGED_BY_FIELD_ID,
  objectUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  type: FieldType.RELATION,
  name: "managedBy",
  label: "Managed By",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  relationTargetFieldMetadataUniversalIdentifier: "61fb202d-bf3c-479b-8437-3000b7c6d6e4",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "managedById",
  },
});
