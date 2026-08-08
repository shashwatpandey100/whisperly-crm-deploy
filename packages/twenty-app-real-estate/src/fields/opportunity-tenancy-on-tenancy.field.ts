import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_TENANCY_FIELD_ID = "7e5d82c0-f6fc-44ba-8af4-a1e45ac833b5";

export default defineField({
  universalIdentifier: OPPORTUNITY_TENANCY_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "tenancy",
  label: "Tenancy",
  relationTargetObjectMetadataUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  relationTargetFieldMetadataUniversalIdentifier: "bad57cd7-3ab2-4f4d-82d5-96dc4af45193",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
