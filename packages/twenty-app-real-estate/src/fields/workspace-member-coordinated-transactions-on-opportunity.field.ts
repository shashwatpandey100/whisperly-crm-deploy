import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const WORKSPACE_MEMBER_COORDINATED_TRANSACTIONS_FIELD_ID = "f4405279-7d18-464f-b105-f3d202dc4dd6";

export default defineField({
  universalIdentifier: WORKSPACE_MEMBER_COORDINATED_TRANSACTIONS_FIELD_ID,
  objectUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  type: FieldType.RELATION,
  name: "coordinatedTransactions",
  label: "coordinatedTransactions",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "a7276fa6-d915-450d-bc77-f71272e97620",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
