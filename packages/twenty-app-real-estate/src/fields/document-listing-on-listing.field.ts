import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const DOCUMENT_LISTING_FIELD_ID = "1ef9fe4e-336a-497d-9ace-ac5956159355";

export default defineField({
  universalIdentifier: DOCUMENT_LISTING_FIELD_ID,
  objectUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  type: FieldType.RELATION,
  name: "listing",
  label: "Listing",
  relationTargetObjectMetadataUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  relationTargetFieldMetadataUniversalIdentifier: "64ffeb8c-d3c6-40b0-9d16-0dd3444fe844",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "listingId",
  },
});
