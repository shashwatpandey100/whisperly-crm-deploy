import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const DOCUMENT_PROPERTY_FIELD_ID = "c6754464-68c0-4c18-8159-57c321de4445";

export default defineField({
  universalIdentifier: DOCUMENT_PROPERTY_FIELD_ID,
  objectUniversalIdentifier: "2bac2815-4060-4f0b-a35d-1eb5bc22ed38",
  type: FieldType.RELATION,
  name: "property",
  label: "Property",
  relationTargetObjectMetadataUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  relationTargetFieldMetadataUniversalIdentifier: "dc385038-aec4-40c4-8d09-078dfbf481c2",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "propertyId",
  },
});
