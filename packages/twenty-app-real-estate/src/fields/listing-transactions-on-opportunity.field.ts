import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const LISTING_TRANSACTIONS_FIELD_ID = "4d4f5f64-84bc-4f51-b77b-621409553c63";

export default defineField({
  universalIdentifier: LISTING_TRANSACTIONS_FIELD_ID,
  objectUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  type: FieldType.RELATION,
  name: "transactions",
  label: "Transactions",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "8005777e-5491-4110-afe4-b810a4ee65b1",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
