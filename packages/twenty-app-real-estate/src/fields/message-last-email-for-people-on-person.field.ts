import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const MESSAGE_LAST_EMAIL_FOR_PEOPLE_FIELD_ID = "7a3dcccb-d4fd-4839-971a-775ca7bd897f";

export default defineField({
  universalIdentifier: MESSAGE_LAST_EMAIL_FOR_PEOPLE_FIELD_ID,
  objectUniversalIdentifier: "20202020-3f6b-4425-80ab-e468899ab4b2",
  type: FieldType.RELATION,
  name: "lastEmailForPeople",
  label: "lastEmailForPeople",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "fd705b81-c6c6-45d3-9777-818956b7627b",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
