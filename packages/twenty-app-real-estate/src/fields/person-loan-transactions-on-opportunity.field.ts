import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_LOAN_TRANSACTIONS_FIELD_ID = "bca00369-289d-470f-9420-6deddb395d2c";

export default defineField({
  universalIdentifier: PERSON_LOAN_TRANSACTIONS_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "loanTransactions",
  label: "Loan Transactions",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "b3717ff4-b3b2-4c12-a21e-8e0076192996",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
