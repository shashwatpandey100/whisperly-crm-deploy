import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const ENQUIRY_PROPERTY_FIELD_ID = "fac34abb-5ebd-49ba-bbb7-f3c8d5a06e47";

export default defineField({
  universalIdentifier: ENQUIRY_PROPERTY_FIELD_ID,
  objectUniversalIdentifier: "5e72b274-378e-4b8d-9bb2-fc8dd2335736",
  type: FieldType.RELATION,
  name: "property",
  label: "Property",
  relationTargetObjectMetadataUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  relationTargetFieldMetadataUniversalIdentifier: "5d2846f4-256d-45f8-bbdb-601cd96fab5f",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "propertyId",
  },
});
