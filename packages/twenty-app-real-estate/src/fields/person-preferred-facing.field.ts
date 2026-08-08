import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_PREFERRED_FACING_FIELD_ID = "4e5f01af-e036-46ef-8870-7a94c347af77";

export default defineField({
  universalIdentifier: PERSON_PREFERRED_FACING_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.MULTI_SELECT,
  name: "preferredFacing",
  label: "Preferred Facing",
  icon: "IconCompass",
  isNullable: true,
  options: [
    { value: "NORTH", label: "North", position: 0, color: "green" },
    { value: "NORTH_EAST", label: "North-East", position: 1, color: "turquoise" },
    { value: "EAST", label: "East", position: 2, color: "sky" },
    { value: "SOUTH_EAST", label: "South-East", position: 3, color: "blue" },
    { value: "SOUTH", label: "South", position: 4, color: "purple" },
    { value: "SOUTH_WEST", label: "South-West", position: 5, color: "pink" },
    { value: "WEST", label: "West", position: 6, color: "red" },
    { value: "NORTH_WEST", label: "North-West", position: 7, color: "orange" },
  ],
});
