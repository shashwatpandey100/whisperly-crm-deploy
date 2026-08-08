import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const TENANCY_ORIGINATING_TRANSACTION_FIELD_ID = "bad57cd7-3ab2-4f4d-82d5-96dc4af45193";

export default defineField({
  universalIdentifier: TENANCY_ORIGINATING_TRANSACTION_FIELD_ID,
  objectUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  type: FieldType.RELATION,
  name: "originatingTransaction",
  label: "Originating Deal",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "7e5d82c0-f6fc-44ba-8af4-a1e45ac833b5",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "originatingTransactionId",
  },
});
