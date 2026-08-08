import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const WORKSPACE_MEMBER_ENQUIRIES_FIELD_ID = "e1c60228-4b74-430a-8b2d-f85b553fd552";

export default defineField({
  universalIdentifier: WORKSPACE_MEMBER_ENQUIRIES_FIELD_ID,
  objectUniversalIdentifier: "20202020-3319-4234-a34c-82d5c0e881a6",
  type: FieldType.RELATION,
  name: "enquiries",
  label: "enquiries",
  relationTargetObjectMetadataUniversalIdentifier: "5e72b274-378e-4b8d-9bb2-fc8dd2335736",
  relationTargetFieldMetadataUniversalIdentifier: "3827dd50-6514-4ee3-af38-b06c9f32c080",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
