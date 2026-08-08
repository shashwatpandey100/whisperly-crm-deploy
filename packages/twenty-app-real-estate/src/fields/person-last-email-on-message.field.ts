import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const PERSON_LAST_EMAIL_FIELD_ID = "fd705b81-c6c6-45d3-9777-818956b7627b";

export default defineField({
  universalIdentifier: PERSON_LAST_EMAIL_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "lastEmail",
  label: "Last email",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-3f6b-4425-80ab-e468899ab4b2",
  relationTargetFieldMetadataUniversalIdentifier: "7a3dcccb-d4fd-4839-971a-775ca7bd897f",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "lastEmailId",
  },
});
