import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const LISTING_PROPERTY_FIELD_ID = "5fc7cbf5-6e33-4a2e-91f9-e0024dba493e";

export default defineField({
  universalIdentifier: LISTING_PROPERTY_FIELD_ID,
  objectUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  type: FieldType.RELATION,
  name: "property",
  label: "Property",
  relationTargetObjectMetadataUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  relationTargetFieldMetadataUniversalIdentifier: "9cda4678-5e66-455d-b817-9d59fd68b3e9",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "propertyId",
  },
});
