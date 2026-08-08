import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_LOAN_OFFICER_FIELD_ID = "b3717ff4-b3b2-4c12-a21e-8e0076192996";

export default defineField({
  universalIdentifier: OPPORTUNITY_LOAN_OFFICER_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "loanOfficer",
  label: "Loan Officer",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "bca00369-289d-470f-9420-6deddb395d2c",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "loanOfficerId",
  },
});
