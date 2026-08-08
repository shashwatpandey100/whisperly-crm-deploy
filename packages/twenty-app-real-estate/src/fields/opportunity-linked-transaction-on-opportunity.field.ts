import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_LINKED_TRANSACTION_FIELD_ID = "773feb7d-4366-43a4-adf7-f1aa8ea1eab8";

export default defineField({
  universalIdentifier: OPPORTUNITY_LINKED_TRANSACTION_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "linkedTransaction",
  label: "Linked Transaction",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "2c752070-4675-444e-a988-6d62d4042b31",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "linkedTransactionId",
  },
});
