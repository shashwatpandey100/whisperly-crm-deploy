import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_ADVOCATE_FIELD_ID = "40778ce1-554f-4521-94e4-0bca94b89da3";

export default defineField({
  universalIdentifier: OPPORTUNITY_ADVOCATE_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "advocate",
  label: "Advocate",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "63737e6b-ee9b-4e9d-bfcb-06b436c72b7f",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "advocateId",
  },
});
