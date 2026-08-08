import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const WORKSPACE_MEMBER_ASSIGNED_LISTINGS_FIELD_ID = "cf75af35-51d6-4227-8910-b1f8e7bfffc4";

export default defineField({
  universalIdentifier: WORKSPACE_MEMBER_ASSIGNED_LISTINGS_FIELD_ID,
  objectUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  type: FieldType.RELATION,
  name: "assignedListings",
  label: "assignedListings",
  relationTargetObjectMetadataUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  relationTargetFieldMetadataUniversalIdentifier: "56465b73-5abe-4612-a0a5-4b7987f86768",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
