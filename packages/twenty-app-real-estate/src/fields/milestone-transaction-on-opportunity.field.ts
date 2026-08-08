import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const MILESTONE_TRANSACTION_FIELD_ID = "db5ad21e-0fd2-410c-8201-541baf55d550";

export default defineField({
  universalIdentifier: MILESTONE_TRANSACTION_FIELD_ID,
  objectUniversalIdentifier: "02d7ba27-d412-4fd4-9997-380dd6b01939",
  type: FieldType.RELATION,
  name: "transaction",
  label: "Transaction",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "b9742a42-6339-4336-bb83-726ffd960170",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "transactionId",
  },
});
