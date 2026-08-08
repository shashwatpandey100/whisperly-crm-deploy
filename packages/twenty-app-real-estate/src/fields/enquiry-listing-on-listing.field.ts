import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const ENQUIRY_LISTING_FIELD_ID = "1a8ce046-392e-4cbd-b5dd-e60265b3cdb7";

export default defineField({
  universalIdentifier: ENQUIRY_LISTING_FIELD_ID,
  objectUniversalIdentifier: "5e72b274-378e-4b8d-9bb2-fc8dd2335736",
  type: FieldType.RELATION,
  name: "listing",
  label: "Listing",
  relationTargetObjectMetadataUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  relationTargetFieldMetadataUniversalIdentifier: "116b4516-2ac7-4167-9ad1-780ebe7cbd7d",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "listingId",
  },
});
