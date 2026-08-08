import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_COUNTRY_OF_RESIDENCE_FIELD_ID = "13b7e985-4008-4a31-8938-ae1e234e3b7d";

export default defineField({
  universalIdentifier: PERSON_COUNTRY_OF_RESIDENCE_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.TEXT,
  name: "countryOfResidence",
  label: "Country of Residence",
  icon: "IconFlag",
  isNullable: true,
});
