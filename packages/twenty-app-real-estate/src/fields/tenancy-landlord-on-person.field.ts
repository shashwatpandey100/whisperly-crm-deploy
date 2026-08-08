import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const TENANCY_LANDLORD_FIELD_ID = "11825103-a3c0-4854-9a1b-b8409fe64659";

export default defineField({
  universalIdentifier: TENANCY_LANDLORD_FIELD_ID,
  objectUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  type: FieldType.RELATION,
  name: "landlord",
  label: "Landlord",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "0542f241-47ea-4761-a788-99dc58493cf2",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "landlordId",
  },
});
