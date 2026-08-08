import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const WORKSPACE_MEMBER_CO_LISTED_LISTINGS_FIELD_ID = "5a4fb4a8-b004-488e-b37e-10669cbda26d";

export default defineField({
  universalIdentifier: WORKSPACE_MEMBER_CO_LISTED_LISTINGS_FIELD_ID,
  objectUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  type: FieldType.RELATION,
  name: "coListedListings",
  label: "coListedListings",
  relationTargetObjectMetadataUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  relationTargetFieldMetadataUniversalIdentifier: "0c0fe65b-98c2-42d4-8742-a772665f9090",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
