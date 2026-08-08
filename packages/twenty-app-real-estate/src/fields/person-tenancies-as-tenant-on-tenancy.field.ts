import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_TENANCIES_AS_TENANT_FIELD_ID = "0ac2ab38-f5c6-4670-97c2-445ac2fe6920";

export default defineField({
  universalIdentifier: PERSON_TENANCIES_AS_TENANT_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "tenanciesAsTenant",
  label: "Tenancies as Tenant",
  relationTargetObjectMetadataUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  relationTargetFieldMetadataUniversalIdentifier: "e4653511-632e-45e4-b454-14d330267d1b",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
