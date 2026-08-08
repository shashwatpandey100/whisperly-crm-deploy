import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const TENANCY_RENEWAL_OF_FIELD_ID = "edf33967-e1b4-429d-bf30-d76125b5de37";

export default defineField({
  universalIdentifier: TENANCY_RENEWAL_OF_FIELD_ID,
  objectUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  type: FieldType.RELATION,
  name: "renewalOf",
  label: "Renewal Of",
  relationTargetObjectMetadataUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  relationTargetFieldMetadataUniversalIdentifier: "397e0fd4-067b-4431-8fbc-71360223fa0e",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "renewalOfId",
  },
});
