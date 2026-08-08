import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_LEGAL_MATTERS_FIELD_ID = "63737e6b-ee9b-4e9d-bfcb-06b436c72b7f";

export default defineField({
  universalIdentifier: PERSON_LEGAL_MATTERS_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "legalMatters",
  label: "Legal Matters",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "40778ce1-554f-4521-94e4-0bca94b89da3",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
