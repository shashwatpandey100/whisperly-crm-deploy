import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_LISTING_FIELD_ID = "8005777e-5491-4110-afe4-b810a4ee65b1";

export default defineField({
  universalIdentifier: OPPORTUNITY_LISTING_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "listing",
  label: "Listing",
  relationTargetObjectMetadataUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  relationTargetFieldMetadataUniversalIdentifier: "4d4f5f64-84bc-4f51-b77b-621409553c63",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "listingId",
  },
});
