import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const NEGOTIATION_LISTING_FIELD_ID = "f97341a3-1d6c-42d1-bd2b-09c26997a3db";

export default defineField({
  universalIdentifier: NEGOTIATION_LISTING_FIELD_ID,
  objectUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  type: FieldType.RELATION,
  name: "listing",
  label: "Listing",
  relationTargetObjectMetadataUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  relationTargetFieldMetadataUniversalIdentifier: "943df16c-adaa-4021-9cd7-458e3270d0fa",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "listingId",
  },
});
