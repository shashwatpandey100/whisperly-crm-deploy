import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_BUYER_FIELD_ID = "5623676d-1f9c-404d-bc83-faac5b19a143";

export default defineField({
  universalIdentifier: OPPORTUNITY_BUYER_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "buyer",
  label: "Buyer",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "a35f15d2-1849-45ab-b4c8-b3c870ac63db",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "buyerId",
  },
});
