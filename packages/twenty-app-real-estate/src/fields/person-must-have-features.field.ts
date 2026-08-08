import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_MUST_HAVE_FEATURES_FIELD_ID = "c7379709-cd01-407e-afa0-5c5e6145614f";

export default defineField({
  universalIdentifier: PERSON_MUST_HAVE_FEATURES_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.MULTI_SELECT,
  name: "mustHaveFeatures",
  label: "Must-have Features",
  icon: "IconStar",
  isNullable: true,
  options: [
    { value: "PARKING", label: "Parking", position: 0, color: "green" },
    { value: "LIFT", label: "Lift", position: 1, color: "turquoise" },
    { value: "POWER_BACKUP", label: "Power Backup", position: 2, color: "sky" },
    { value: "GATED", label: "Gated Community", position: 3, color: "blue" },
    { value: "POOL", label: "Swimming Pool", position: 4, color: "purple" },
    { value: "GYM", label: "Gym", position: 5, color: "pink" },
    { value: "PARK_FACING", label: "Park Facing", position: 6, color: "red" },
    { value: "CORNER", label: "Corner Unit", position: 7, color: "orange" },
    { value: "PET_FRIENDLY", label: "Pet Friendly", position: 8, color: "yellow" },
    { value: "SCHOOL_NEARBY", label: "School Nearby", position: 9, color: "gray" },
    { value: "METRO_NEARBY", label: "Metro Nearby", position: 10, color: "green" },
  ],
});
