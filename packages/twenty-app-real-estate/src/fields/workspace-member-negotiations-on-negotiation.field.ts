import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const WORKSPACE_MEMBER_NEGOTIATIONS_FIELD_ID = "df21636f-347c-4a72-b67c-f40a66288872";

export default defineField({
  universalIdentifier: WORKSPACE_MEMBER_NEGOTIATIONS_FIELD_ID,
  objectUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  type: FieldType.RELATION,
  name: "negotiations",
  label: "negotiations",
  relationTargetObjectMetadataUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  relationTargetFieldMetadataUniversalIdentifier: "17a5b786-22bf-404d-90e0-a223559cf3be",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
