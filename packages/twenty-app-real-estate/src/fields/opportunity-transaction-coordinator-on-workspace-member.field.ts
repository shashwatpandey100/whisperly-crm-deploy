import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_TRANSACTION_COORDINATOR_FIELD_ID = "a7276fa6-d915-450d-bc77-f71272e97620";

export default defineField({
  universalIdentifier: OPPORTUNITY_TRANSACTION_COORDINATOR_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "transactionCoordinator",
  label: "Transaction Coordinator",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  relationTargetFieldMetadataUniversalIdentifier: "f4405279-7d18-464f-b105-f3d202dc4dd6",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "transactionCoordinatorId",
  },
});
