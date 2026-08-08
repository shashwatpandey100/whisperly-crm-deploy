import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_PROPERTY_FIELD_ID = "288214c4-40ef-44d3-a211-83be1f73a35c";

export default defineField({
  universalIdentifier: OPPORTUNITY_PROPERTY_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "property",
  label: "Property",
  relationTargetObjectMetadataUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  relationTargetFieldMetadataUniversalIdentifier: "0c28390f-9ff1-4988-87fc-224bebd09bee",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "propertyId",
  },
});
