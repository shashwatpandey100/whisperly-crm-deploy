import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PROPERTY_TRANSACTIONS_FIELD_ID = "0c28390f-9ff1-4988-87fc-224bebd09bee";

export default defineField({
  universalIdentifier: PROPERTY_TRANSACTIONS_FIELD_ID,
  objectUniversalIdentifier: "96396b13-d599-4418-b1e1-e7dc1b09882a",
  type: FieldType.RELATION,
  name: "transactions",
  label: "Transactions",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  relationTargetFieldMetadataUniversalIdentifier: "288214c4-40ef-44d3-a211-83be1f73a35c",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
