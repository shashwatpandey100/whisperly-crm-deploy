import { defineField, FieldType } from 'twenty-sdk/define';

export const COMPANY_RERA_NUMBER_COMPANY_FIELD_ID = "a4390817-c987-4914-9d96-348817bef556";

export default defineField({
  universalIdentifier: COMPANY_RERA_NUMBER_COMPANY_FIELD_ID,
  objectUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  type: FieldType.TEXT,
  name: "reraNumberCompany",
  label: "RERA Number",
  icon: "IconShieldCheck",
  isNullable: true,
});
