import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const OPPORTUNITY_LINKED_FROM_FIELD_ID = "2c752070-4675-444e-a988-6d62d4042b31";

export default defineField({
  universalIdentifier: OPPORTUNITY_LINKED_FROM_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.RELATION,
  name: "linkedFrom",
  label: "Linked From",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "773feb7d-4366-43a4-adf7-f1aa8ea1eab8",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
