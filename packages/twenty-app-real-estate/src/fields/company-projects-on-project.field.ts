import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const COMPANY_PROJECTS_FIELD_ID = "5c6dfd69-6ce3-435b-93ef-9a91580c3ab4";

export default defineField({
  universalIdentifier: COMPANY_PROJECTS_FIELD_ID,
  objectUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  type: FieldType.RELATION,
  name: "projects",
  label: "Projects",
  relationTargetObjectMetadataUniversalIdentifier: "c0e6df6f-ea5c-46a8-8b3a-27dfb28c10ca",
  relationTargetFieldMetadataUniversalIdentifier: "afe94319-d570-4c1b-ab41-395fd0e79a8d",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
