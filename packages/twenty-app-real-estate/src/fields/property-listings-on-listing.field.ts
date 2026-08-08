import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PROPERTY_LISTINGS_FIELD_ID = "9cda4678-5e66-455d-b817-9d59fd68b3e9";

export default defineField({
  universalIdentifier: PROPERTY_LISTINGS_FIELD_ID,
  objectUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  type: FieldType.RELATION,
  name: "listings",
  label: "Listings",
  relationTargetObjectMetadataUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  relationTargetFieldMetadataUniversalIdentifier: "5fc7cbf5-6e33-4a2e-91f9-e0024dba493e",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
