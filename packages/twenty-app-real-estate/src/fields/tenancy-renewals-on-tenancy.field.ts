import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const TENANCY_RENEWALS_FIELD_ID = "397e0fd4-067b-4431-8fbc-71360223fa0e";

export default defineField({
  universalIdentifier: TENANCY_RENEWALS_FIELD_ID,
  objectUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  type: FieldType.RELATION,
  name: "renewals",
  label: "Renewals",
  relationTargetObjectMetadataUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  relationTargetFieldMetadataUniversalIdentifier: "edf33967-e1b4-429d-bf30-d76125b5de37",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
