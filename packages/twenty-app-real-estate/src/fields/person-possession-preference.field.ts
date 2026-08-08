import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_POSSESSION_PREFERENCE_FIELD_ID = "3b2bd878-5607-4cea-be48-bae44b7207d1";

export default defineField({
  universalIdentifier: PERSON_POSSESSION_PREFERENCE_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.SELECT,
  name: "possessionPreference",
  label: "Possession Preference",
  icon: "IconKey",
  isNullable: true,
  options: [
    { value: "READY_TO_MOVE", label: "Ready to Move", position: 0, color: "green" },
    { value: "UNDER_CONSTRUCTION", label: "Under Construction", position: 1, color: "orange" },
    { value: "EITHER", label: "Either", position: 2, color: "gray" },
  ],
});
