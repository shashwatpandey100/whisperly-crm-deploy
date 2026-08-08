import { defineField, FieldType } from 'twenty-sdk/define';

export const COMPANY_PREFERRED_VENDOR_FIELD_ID = "345750de-0d76-4c66-9a26-1c17162efa15";

export default defineField({
  universalIdentifier: COMPANY_PREFERRED_VENDOR_FIELD_ID,
  objectUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  type: FieldType.BOOLEAN,
  name: "preferredVendor",
  label: "Preferred Vendor",
  icon: "IconStar",
  isNullable: true,
});
