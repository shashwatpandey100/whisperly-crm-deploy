import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const COMPANY_CLIENT_REFERRALS_FIELD_ID = "4b994169-22bb-41ca-9bc5-cb42b2130bb4";

export default defineField({
  universalIdentifier: COMPANY_CLIENT_REFERRALS_FIELD_ID,
  objectUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  type: FieldType.RELATION,
  name: "clientReferrals",
  label: "Client Referrals",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "6e04fed2-a27c-4fc5-ae7c-fe9d99e074a2",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
