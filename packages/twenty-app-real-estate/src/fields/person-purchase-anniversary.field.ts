import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_PURCHASE_ANNIVERSARY_FIELD_ID = "16b26844-e6d8-472c-b062-9eea433ad762";

export default defineField({
  universalIdentifier: PERSON_PURCHASE_ANNIVERSARY_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.DATE,
  name: "purchaseAnniversary",
  label: "Purchase Anniversary",
  description: "Highest-ROI past-client nurture trigger.",
  icon: "IconGift",
  isNullable: true,
});
