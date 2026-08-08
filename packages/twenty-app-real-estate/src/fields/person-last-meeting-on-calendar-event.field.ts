import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const PERSON_LAST_MEETING_FIELD_ID = "c8882287-f638-4a96-a235-1819e793e373";

export default defineField({
  universalIdentifier: PERSON_LAST_MEETING_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "lastMeeting",
  label: "Last meeting",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-8f1d-4eef-9f85-0d1965e27221",
  relationTargetFieldMetadataUniversalIdentifier: "257dd874-d834-403d-9cb8-f3db7e587d02",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "lastMeetingId",
  },
});
