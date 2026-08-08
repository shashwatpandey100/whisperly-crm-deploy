import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_DESIRED_BHK_FIELD_ID = "1ba74ca8-2378-4c30-9cff-8bc2c3330b35";

export default defineField({
  universalIdentifier: PERSON_DESIRED_BHK_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.MULTI_SELECT,
  name: "desiredBhk",
  label: "Desired BHK",
  icon: "IconBed",
  isNullable: true,
  options: [
    { value: "RK1", label: "1 RK", position: 0, color: "green" },
    { value: "BHK1", label: "1 BHK", position: 1, color: "turquoise" },
    { value: "BHK2", label: "2 BHK", position: 2, color: "sky" },
    { value: "BHK2_5", label: "2.5 BHK", position: 3, color: "blue" },
    { value: "BHK3", label: "3 BHK", position: 4, color: "purple" },
    { value: "BHK3_5", label: "3.5 BHK", position: 5, color: "pink" },
    { value: "BHK4", label: "4 BHK", position: 6, color: "red" },
    { value: "BHK4_PLUS", label: "4+ BHK", position: 7, color: "orange" },
  ],
});
