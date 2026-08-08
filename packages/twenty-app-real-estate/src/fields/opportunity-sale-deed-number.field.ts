import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_SALE_DEED_NUMBER_FIELD_ID = "5f4080e7-1016-4a8b-9b3a-c2c604aec56d";

export default defineField({
  universalIdentifier: OPPORTUNITY_SALE_DEED_NUMBER_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.TEXT,
  name: "saleDeedNumber",
  label: "Sale Deed Number",
  icon: "IconHash",
  isNullable: true,
});
