import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PROPERTY_TENANCIES_FIELD_ID = "db55fa81-f59e-4b28-9bda-b485d1ab2d28";

export default defineField({
  universalIdentifier: PROPERTY_TENANCIES_FIELD_ID,
  objectUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  type: FieldType.RELATION,
  name: "tenancies",
  label: "Tenancies",
  relationTargetObjectMetadataUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  relationTargetFieldMetadataUniversalIdentifier: "8b1a7d99-458c-4474-bacc-5aa29d087b99",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
