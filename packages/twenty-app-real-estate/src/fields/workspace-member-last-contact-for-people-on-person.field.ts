import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const WORKSPACE_MEMBER_LAST_CONTACT_FOR_PEOPLE_FIELD_ID = "bec41e57-6b6f-4bb2-90cc-4030384dd8f6";

export default defineField({
  universalIdentifier: WORKSPACE_MEMBER_LAST_CONTACT_FOR_PEOPLE_FIELD_ID,
  objectUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  type: FieldType.RELATION,
  name: "lastContactForPeople",
  label: "lastContactForPeople",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "cfdee7bd-8d41-41e6-a888-512705e75d7b",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
