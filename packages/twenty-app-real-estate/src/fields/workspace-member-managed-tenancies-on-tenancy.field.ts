import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const WORKSPACE_MEMBER_MANAGED_TENANCIES_FIELD_ID = "61fb202d-bf3c-479b-8437-3000b7c6d6e4";

export default defineField({
  universalIdentifier: WORKSPACE_MEMBER_MANAGED_TENANCIES_FIELD_ID,
  objectUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  type: FieldType.RELATION,
  name: "managedTenancies",
  label: "managedTenancies",
  relationTargetObjectMetadataUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  relationTargetFieldMetadataUniversalIdentifier: "e60fbd8a-7cc8-482c-921d-d9131ee96441",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
