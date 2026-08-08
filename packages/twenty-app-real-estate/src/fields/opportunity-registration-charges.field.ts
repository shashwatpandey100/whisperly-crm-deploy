import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_REGISTRATION_CHARGES_FIELD_ID = "35ad6dee-e38e-4316-b566-86520d79765c";

export default defineField({
  universalIdentifier: OPPORTUNITY_REGISTRATION_CHARGES_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.CURRENCY,
  name: "registrationCharges",
  label: "Registration Charges",
  description: "Approximately 1 percent.",
  icon: "IconFileCertificate",
  isNullable: true,
});
