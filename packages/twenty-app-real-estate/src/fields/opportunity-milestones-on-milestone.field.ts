import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_MILESTONES_FIELD_ID = "b9742a42-6339-4336-bb83-726ffd960170";

export default defineField({
  universalIdentifier: OPPORTUNITY_MILESTONES_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "milestones",
  label: "Milestones",
  relationTargetObjectMetadataUniversalIdentifier: "02d7ba27-d412-4fd4-9997-380dd6b01939",
  relationTargetFieldMetadataUniversalIdentifier: "db5ad21e-0fd2-410c-8201-541baf55d550",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
