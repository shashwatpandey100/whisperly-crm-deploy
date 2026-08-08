import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_COUNTERPARTY_TRANSACTIONS_FIELD_ID = "1e2c74ab-cf61-4323-b1f9-f3e2e7c4e53a";

export default defineField({
  universalIdentifier: PERSON_COUNTERPARTY_TRANSACTIONS_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "counterpartyTransactions",
  label: "Counterparty Transactions",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "10bebcd9-1208-4fa1-aa62-70eaf92bd1d2",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
