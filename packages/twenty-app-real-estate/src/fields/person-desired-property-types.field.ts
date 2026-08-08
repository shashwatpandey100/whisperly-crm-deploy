import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_DESIRED_PROPERTY_TYPES_FIELD_ID = "abd60eef-a5f0-4344-81ec-2837ef68c6f5";

export default defineField({
  universalIdentifier: PERSON_DESIRED_PROPERTY_TYPES_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.MULTI_SELECT,
  name: "desiredPropertyTypes",
  label: "Desired Property Types",
  icon: "IconHome2",
  isNullable: true,
  options: [
    { value: "APARTMENT", label: "Apartment", position: 0, color: "green" },
    { value: "INDEPENDENT_HOUSE", label: "Independent House", position: 1, color: "turquoise" },
    { value: "VILLA", label: "Villa", position: 2, color: "sky" },
    { value: "BUILDER_FLOOR", label: "Builder Floor", position: 3, color: "blue" },
    { value: "PLOT", label: "Plot", position: 4, color: "purple" },
    { value: "AGRICULTURAL", label: "Agricultural Land", position: 5, color: "pink" },
    { value: "COMMERCIAL", label: "Commercial", position: 6, color: "red" },
    { value: "WAREHOUSE", label: "Warehouse", position: 7, color: "orange" },
  ],
});
