import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_SELLER_FIELD_ID = "6b02f3a8-7366-4d40-9be2-65e4894299a7";

export default defineField({
  universalIdentifier: OPPORTUNITY_SELLER_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "seller",
  label: "Seller",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "34d615a7-9646-47b2-a169-54dca812146b",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "sellerId",
  },
});
