import { defineField, FieldType } from 'twenty-sdk/define';

export const COMPANY_COMPANY_TYPE_FIELD_ID = "01b0bd41-8aba-4fc2-b695-495cff792f53";

export default defineField({
  universalIdentifier: COMPANY_COMPANY_TYPE_FIELD_ID,
  objectUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  type: FieldType.MULTI_SELECT,
  name: "companyType",
  label: "Company Type",
  icon: "IconBuildingStore",
  isNullable: true,
  options: [
    { value: "BUILDER", label: "Builder / Developer", position: 0, color: "purple" },
    { value: "BANK", label: "Bank / NBFC", position: 1, color: "blue" },
    { value: "LAW_FIRM", label: "Law Firm", position: 2, color: "orange" },
    { value: "BROKERAGE", label: "Brokerage", position: 3, color: "green" },
    { value: "SOCIETY", label: "Housing Society", position: 4, color: "sky" },
    { value: "PROPERTY_MGMT", label: "Property Management", position: 5, color: "turquoise" },
    { value: "INTERIOR", label: "Interior / Contractor", position: 6, color: "yellow" },
    { value: "PACKERS_MOVERS", label: "Packers and Movers", position: 7, color: "gray" },
    { value: "PHOTOGRAPHY", label: "Photography / Staging", position: 8, color: "pink" },
    { value: "VALUATION", label: "Valuation", position: 9, color: "gray" },
    { value: "ARCHITECT", label: "Architect", position: 10, color: "gray" },
    { value: "CORPORATE_CLIENT", label: "Corporate Client", position: 11, color: "blue" },
  ],
});
