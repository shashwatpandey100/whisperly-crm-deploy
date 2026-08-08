import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const PROJECT_BUILDER_FIELD_ID = "afe94319-d570-4c1b-ab41-395fd0e79a8d";

export default defineField({
  universalIdentifier: PROJECT_BUILDER_FIELD_ID,
  objectUniversalIdentifier: "c0e6df6f-ea5c-46a8-8b3a-27dfb28c10ca",
  type: FieldType.RELATION,
  name: "builder",
  label: "Builder",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  relationTargetFieldMetadataUniversalIdentifier: "5c6dfd69-6ce3-435b-93ef-9a91580c3ab4",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "builderId",
  },
});
