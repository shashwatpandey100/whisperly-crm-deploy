import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PROPERTY_ENQUIRIES_FIELD_ID = "5d2846f4-256d-45f8-bbdb-601cd96fab5f";

export default defineField({
  universalIdentifier: PROPERTY_ENQUIRIES_FIELD_ID,
  objectUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  type: FieldType.RELATION,
  name: "enquiries",
  label: "Enquiries",
  relationTargetObjectMetadataUniversalIdentifier: "5e72b274-378e-4b8d-9bb2-fc8dd2335736",
  relationTargetFieldMetadataUniversalIdentifier: "fac34abb-5ebd-49ba-bbb7-f3c8d5a06e47",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
