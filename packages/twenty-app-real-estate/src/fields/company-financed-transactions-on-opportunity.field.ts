import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const COMPANY_FINANCED_TRANSACTIONS_FIELD_ID = "00649863-0405-47a4-a573-cb8627bd381c";

export default defineField({
  universalIdentifier: COMPANY_FINANCED_TRANSACTIONS_FIELD_ID,
  objectUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  type: FieldType.RELATION,
  name: "financedTransactions",
  label: "Financed Transactions",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "b4021169-ac38-4e1f-b907-7fd271cc9dcf",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
