import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_ENQUIRIES_FIELD_ID = "bbdab24d-742b-4ebd-90b8-6edf15ed6f8f";

export default defineField({
  universalIdentifier: PERSON_ENQUIRIES_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "enquiries",
  label: "Enquiries",
  relationTargetObjectMetadataUniversalIdentifier: "5e72b274-378e-4b8d-9bb2-fc8dd2335736",
  relationTargetFieldMetadataUniversalIdentifier: "d24bd095-0397-42a0-955b-1e4ca7d7d925",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
