import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_LOAN_REQUIRED_FIELD_ID = "7219603c-abba-47f3-8f2a-7ed64a024bb8";

export default defineField({
  universalIdentifier: PERSON_LOAN_REQUIRED_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.BOOLEAN,
  name: "loanRequired",
  label: "Loan Required",
  icon: "IconBuildingBank",
  isNullable: true,
});
