import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_ENCUMBRANCE_CERTIFICATE_OBTAINED_FIELD_ID = "7b55514a-5342-48b2-910f-676a8755b470";

export default defineField({
  universalIdentifier: OPPORTUNITY_ENCUMBRANCE_CERTIFICATE_OBTAINED_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.BOOLEAN,
  name: "encumbranceCertificateObtained",
  label: "EC Obtained",
  icon: "IconFileCheck",
  isNullable: true,
});
