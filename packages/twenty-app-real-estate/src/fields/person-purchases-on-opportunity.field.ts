import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_PURCHASES_FIELD_ID = "a35f15d2-1849-45ab-b4c8-b3c870ac63db";

export default defineField({
  universalIdentifier: PERSON_PURCHASES_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "purchases",
  label: "Purchases",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "5623676d-1f9c-404d-bc83-faac5b19a143",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
