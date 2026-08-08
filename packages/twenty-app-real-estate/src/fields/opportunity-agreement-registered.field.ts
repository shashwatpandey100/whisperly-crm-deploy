import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_AGREEMENT_REGISTERED_FIELD_ID = "f9715a0a-63c3-4104-91f7-3da6409d924d";

export default defineField({
  universalIdentifier: OPPORTUNITY_AGREEMENT_REGISTERED_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.BOOLEAN,
  name: "agreementRegistered",
  label: "ATS Registered",
  icon: "IconFileCertificate",
  isNullable: true,
});
