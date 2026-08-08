import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_PRE_APPROVED_AMOUNT_FIELD_ID = "13601eb6-6ab3-40d0-81db-a76e0309eaa2";

export default defineField({
  universalIdentifier: PERSON_PRE_APPROVED_AMOUNT_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.CURRENCY,
  name: "preApprovedAmount",
  label: "Pre-Approved Amount",
  icon: "IconBuildingBank",
  isNullable: true,
});
