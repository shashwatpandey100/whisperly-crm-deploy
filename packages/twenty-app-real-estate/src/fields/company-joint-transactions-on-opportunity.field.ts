import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const COMPANY_JOINT_TRANSACTIONS_FIELD_ID = "8990ad93-9413-4893-b9b4-537a23d5610c";

export default defineField({
  universalIdentifier: COMPANY_JOINT_TRANSACTIONS_FIELD_ID,
  objectUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  type: FieldType.RELATION,
  name: "jointTransactions",
  label: "Joint Transactions",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "96e7b753-03d0-4e99-8d46-961ef6302969",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
