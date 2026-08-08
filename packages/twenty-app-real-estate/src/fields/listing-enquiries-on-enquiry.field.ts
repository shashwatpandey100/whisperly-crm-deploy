import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const LISTING_ENQUIRIES_FIELD_ID = "116b4516-2ac7-4167-9ad1-780ebe7cbd7d";

export default defineField({
  universalIdentifier: LISTING_ENQUIRIES_FIELD_ID,
  objectUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  type: FieldType.RELATION,
  name: "enquiries",
  label: "Enquiries",
  relationTargetObjectMetadataUniversalIdentifier: "5e72b274-378e-4b8d-9bb2-fc8dd2335736",
  relationTargetFieldMetadataUniversalIdentifier: "1a8ce046-392e-4cbd-b5dd-e60265b3cdb7",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
