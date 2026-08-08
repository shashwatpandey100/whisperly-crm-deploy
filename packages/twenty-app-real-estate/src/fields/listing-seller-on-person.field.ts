import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const LISTING_SELLER_FIELD_ID = "4bd0e17d-252a-4d13-98f7-89b0b9a3b3c7";

export default defineField({
  universalIdentifier: LISTING_SELLER_FIELD_ID,
  objectUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  type: FieldType.RELATION,
  name: "seller",
  label: "Seller / Owner",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "a01eff6f-27d4-4d0f-95aa-f00d5db64909",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "sellerId",
  },
});
