import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const TENANCY_PROPERTY_FIELD_ID = "8b1a7d99-458c-4474-bacc-5aa29d087b99";

export default defineField({
  universalIdentifier: TENANCY_PROPERTY_FIELD_ID,
  objectUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  type: FieldType.RELATION,
  name: "property",
  label: "Property",
  relationTargetObjectMetadataUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  relationTargetFieldMetadataUniversalIdentifier: "db55fa81-f59e-4b28-9bda-b485d1ab2d28",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "propertyId",
  },
});
