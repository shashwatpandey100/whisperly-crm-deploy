import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_DESIRED_LOCALITIES_FIELD_ID = "a1a39234-43e7-4a94-94aa-3b91ca370ea1";

export default defineField({
  universalIdentifier: PERSON_DESIRED_LOCALITIES_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.TEXT,
  name: "desiredLocalities",
  label: "Desired Localities",
  description: "Primary search axis in India.",
  icon: "IconMapPin",
  isNullable: true,
});
