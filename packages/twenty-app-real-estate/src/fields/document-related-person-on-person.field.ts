import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const DOCUMENT_RELATED_PERSON_FIELD_ID = "e39a64fa-0511-4d5a-97a3-48fce88ca1c4";

export default defineField({
  universalIdentifier: DOCUMENT_RELATED_PERSON_FIELD_ID,
  objectUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  type: FieldType.RELATION,
  name: "relatedPerson",
  label: "Person",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "fdf486e4-84ca-45fd-a246-c53ceaccffbb",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "relatedPersonId",
  },
});
