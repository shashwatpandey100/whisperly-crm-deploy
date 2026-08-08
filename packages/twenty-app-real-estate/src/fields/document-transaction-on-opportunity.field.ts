import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const DOCUMENT_TRANSACTION_FIELD_ID = "aaa50b43-b3b5-46da-b635-e64a272458e1";

export default defineField({
  universalIdentifier: DOCUMENT_TRANSACTION_FIELD_ID,
  objectUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  type: FieldType.RELATION,
  name: "transaction",
  label: "Transaction",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "0b7c4bfe-42ce-407c-9f79-9274d22cb9ad",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "transactionId",
  },
});
