import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_REFERRALS_FIELD_ID = "7d2abb37-50d1-4a86-812e-95cdd97c66f2";

export default defineField({
  universalIdentifier: PERSON_REFERRALS_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "referrals",
  label: "Referrals",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "49738904-a5d0-4b5e-a278-3a739a7909d8",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
