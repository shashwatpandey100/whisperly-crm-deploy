import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const CALENDAR_EVENT_LAST_MEETING_FOR_PEOPLE_FIELD_ID = "257dd874-d834-403d-9cb8-f3db7e587d02";

export default defineField({
  universalIdentifier: CALENDAR_EVENT_LAST_MEETING_FOR_PEOPLE_FIELD_ID,
  objectUniversalIdentifier: "20202020-8f1d-4eef-9f85-0d1965e27221",
  type: FieldType.RELATION,
  name: "lastMeetingForPeople",
  label: "lastMeetingForPeople",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "c8882287-f638-4a96-a235-1819e793e373",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
