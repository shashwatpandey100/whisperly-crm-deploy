import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_TENANCIES_AS_LANDLORD_FIELD_ID = "0542f241-47ea-4761-a788-99dc58493cf2";

export default defineField({
  universalIdentifier: PERSON_TENANCIES_AS_LANDLORD_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "tenanciesAsLandlord",
  label: "Tenancies as Landlord",
  relationTargetObjectMetadataUniversalIdentifier: "43ad26e0-9739-4748-8c0b-5c18a917e219",
  relationTargetFieldMetadataUniversalIdentifier: "11825103-a3c0-4854-9a1b-b8409fe64659",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
