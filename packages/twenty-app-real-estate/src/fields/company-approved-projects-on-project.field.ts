import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const COMPANY_APPROVED_PROJECTS_FIELD_ID = "cf4b8226-4ad6-4438-a65a-75a474cc9dc4";

export default defineField({
  universalIdentifier: COMPANY_APPROVED_PROJECTS_FIELD_ID,
  objectUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  type: FieldType.RELATION,
  name: "approvedProjects",
  label: "Approved Projects",
  relationTargetObjectMetadataUniversalIdentifier: "c0e6df6f-ea5c-46a8-8b3a-27dfb28c10ca",
  relationTargetFieldMetadataUniversalIdentifier: "5c769665-7820-45db-a38e-e0289e3467bc",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
