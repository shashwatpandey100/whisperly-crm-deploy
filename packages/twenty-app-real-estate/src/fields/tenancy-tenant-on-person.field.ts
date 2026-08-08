import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const TENANCY_TENANT_FIELD_ID = "e4653511-632e-45e4-b454-14d330267d1b";

export default defineField({
  universalIdentifier: TENANCY_TENANT_FIELD_ID,
  objectUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  type: FieldType.RELATION,
  name: "tenant",
  label: "Tenant",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "0ac2ab38-f5c6-4670-97c2-445ac2fe6920",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "tenantId",
  },
});
