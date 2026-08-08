import { defineField, FieldType } from 'twenty-sdk/define';

export const PERSON_CONTACT_TYPE_FIELD_ID = "b36d5ee0-ab9a-46fe-a211-d1b9a82a14e6";

export default defineField({
  universalIdentifier: PERSON_CONTACT_TYPE_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.MULTI_SELECT,
  name: "contactType",
  label: "Contact Type",
  description: "Multi-select on purpose. A move-up client is both buyer and seller at once.",
  icon: "IconUserCog",
  isNullable: true,
  options: [
    { value: "BUYER", label: "Buyer", position: 0, color: "green" },
    { value: "SELLER", label: "Seller", position: 1, color: "blue" },
    { value: "TENANT", label: "Tenant", position: 2, color: "turquoise" },
    { value: "LANDLORD", label: "Landlord", position: 3, color: "sky" },
    { value: "INVESTOR", label: "Investor", position: 4, color: "purple" },
    { value: "NRI_CLIENT", label: "NRI Client", position: 5, color: "pink" },
    { value: "PAST_CLIENT", label: "Past Client", position: 6, color: "gray" },
    { value: "SPHERE", label: "Sphere of Influence", position: 7, color: "gray" },
    { value: "ADVOCATE", label: "Advocate", position: 8, color: "orange" },
    { value: "BROKER", label: "Broker", position: 9, color: "orange" },
    { value: "BUILDER_CONTACT", label: "Builder Contact", position: 10, color: "orange" },
    { value: "VENDOR", label: "Vendor", position: 11, color: "gray" },
    { value: "REFERRAL_SOURCE", label: "Referral Source", position: 12, color: "yellow" },
  ],
});
