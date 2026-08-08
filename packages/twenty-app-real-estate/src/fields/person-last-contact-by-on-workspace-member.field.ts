import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const PERSON_LAST_CONTACT_BY_FIELD_ID = "cfdee7bd-8d41-41e6-a888-512705e75d7b";

export default defineField({
  universalIdentifier: PERSON_LAST_CONTACT_BY_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "lastContactBy",
  label: "Last contact by",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  relationTargetFieldMetadataUniversalIdentifier: "bec41e57-6b6f-4bb2-90cc-4030384dd8f6",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "lastContactById",
  },
});
