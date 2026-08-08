import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const PROPERTY_OWNER_FIELD_ID = "8633bc6d-1ccb-4712-b7b3-cac2ec1da1fe";

export default defineField({
  universalIdentifier: PROPERTY_OWNER_FIELD_ID,
  objectUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  type: FieldType.RELATION,
  name: "owner",
  label: "Owner",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "cb274b95-9d38-400a-a3ed-fdd15d027374",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "ownerId",
  },
});
