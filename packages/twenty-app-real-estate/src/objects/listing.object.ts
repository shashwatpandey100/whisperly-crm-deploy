import { defineObject, FieldType, NumberDataType } from 'twenty-sdk/define';

export const LISTING_UNIVERSAL_IDENTIFIER = "cbf01108-4045-4042-a5ce-069f0ec5f065";
export const LISTING_WORKSTATIONS_FIELD_ID = "fee8c137-5353-4d38-a8eb-01051bdb947d";
export const LISTING_EXPIRY_DATE_FIELD_ID = "245c5aba-eef8-4334-9b7f-7a0b7831c461";
export const LISTING_LEASE_TERM_YEARS_FIELD_ID = "7fdb1d41-8139-4797-9014-b944d2b6623a";
export const LISTING_LISTING_SOURCE_FIELD_ID = "8837a28b-735e-4ce7-a3a1-e3d764720cbf";
export const LISTING_RENT_ESCALATION_PCT_FIELD_ID = "2e14b802-2705-4566-b8ba-c6cfd4ee63a8";
export const LISTING_NAME_FIELD_ID = "f87fb48b-eab5-5097-8f09-9dde47fceb9d";
export const LISTING_SECURITY_DEPOSIT_FIELD_ID = "da24ee76-148e-41d6-963a-4060c5f8b39c";
export const LISTING_VISIT_INSTRUCTIONS_FIELD_ID = "ebfbe8ef-215a-4e32-a40a-442e2b1daf39";
export const LISTING_OTHER_CHARGES_FIELD_ID = "b98eb394-a26f-45f5-b9ca-18f98375b824";
export const LISTING_MAINTENANCE_CHARGES_FIELD_ID = "1ba5f297-25b5-498b-8444-4d72784415fa";
export const LISTING_MONTHLY_RENT_FIELD_ID = "ab1b81fc-39d6-4027-b9dd-12e8b67aeac4";
export const LISTING_NOTICE_PERIOD_MONTHS_FIELD_ID = "c50219d2-082d-4fb9-9de2-59d31eb868ba";
export const LISTING_SEATING_CAPACITY_FIELD_ID = "389f9a8e-5b9f-4b18-9ac6-706b109e8818";
export const LISTING_RERA_AGENT_NUMBER_FIELD_ID = "6d7c24aa-2120-4eec-a713-5b18da89ec2e";
export const LISTING_TENANT_PREFERENCE_FIELD_ID = "2768c757-b944-4dd1-b06c-3108a1f4b8ff";
export const LISTING_DAYS_ON_MARKET_FIELD_ID = "26b968af-6361-4237-ae28-c6802f73bcda";
export const LISTING_PRICE_PER_SQ_FT_FIELD_ID = "f9ba53cb-29a1-42e9-8b6d-d90bb257467c";
export const LISTING_PORTALS_FIELD_ID = "57348ed2-2611-4bfc-bf52-8c9c0e2032ff";
export const LISTING_PETS_ALLOWED_FIELD_ID = "0c0e2754-53b9-48f5-b90e-a9c781bc701f";
export const LISTING_AVAILABLE_FROM_FIELD_ID = "879cea58-571a-466d-8d08-c4fbe96b51df";
export const LISTING_KEY_AVAILABLE_WITH_FIELD_ID = "1dd15173-846f-45b8-a0af-9d009e08a569";
export const LISTING_LISTING_FOR_FIELD_ID = "30edb9f4-41f8-4222-928b-8c08d6de7bc0";
export const LISTING_CABINS_FIELD_ID = "2345c9db-e3cd-44ec-a21a-52aa91e01d7a";
export const LISTING_MAINTENANCE_INCLUDED_FIELD_ID = "180ed3c8-5a07-45b6-b4e3-1d2bdc125958";
export const LISTING_LISTING_STATUS_FIELD_ID = "8a54878b-549b-4792-a6c3-ede74e86de8e";
export const LISTING_MANDATE_TYPE_FIELD_ID = "bcc10c47-87d6-4234-b950-fbb577dbdef9";
export const LISTING_PORTAL_MAGIC_BRICKS_ID_FIELD_ID = "b492b9f1-fa71-4fee-be37-f2163554c4eb";
export const LISTING_ESCALATION_FREQUENCY_YEARS_FIELD_ID = "35f8fdbc-d58e-4d97-a6ce-2e2bf1f329a4";
export const LISTING_LISTED_DATE_FIELD_ID = "9e42322e-a07b-4644-9e1b-1c14329f0ef8";
export const LISTING_ALL_INCLUSIVE_FIELD_ID = "70f92d70-05eb-4542-a51c-aefeefa08dbe";
export const LISTING_LOCK_IN_PERIOD_MONTHS_FIELD_ID = "e4f7aac6-723b-4321-a1f9-d2b9bcb5e6ef";
export const LISTING_PORTAL99ACRES_ID_FIELD_ID = "49159c10-db04-4575-b72b-b9691c3312d3";
export const LISTING_EXPECTED_PRICE_FIELD_ID = "928c0775-5cab-4620-94ce-47f5cee12f53";
export const LISTING_PORTAL_HOUSING_ID_FIELD_ID = "ebe7bf79-faf0-48a3-b622-8c070dd55fd6";
export const LISTING_PRICE_NEGOTIABLE_FIELD_ID = "a3c176d6-4136-4551-8601-155ceee173aa";

export default defineObject({
  universalIdentifier: LISTING_UNIVERSAL_IDENTIFIER,
  nameSingular: "listing",
  namePlural: "listings",
  labelSingular: "Listing",
  labelPlural: "Listings",
  description: "A mandate to sell or rent a property, with portal presence and pricing.",
  icon: "IconTag",
  labelIdentifierFieldMetadataUniversalIdentifier: LISTING_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: LISTING_WORKSTATIONS_FIELD_ID,
      type: FieldType.NUMBER,
      name: "workstations",
      label: "Workstations",
      icon: "IconDeviceDesktop",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: LISTING_EXPIRY_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: "expiryDate",
      label: "Mandate Expiry",
      icon: "IconCalendarX",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_LEASE_TERM_YEARS_FIELD_ID,
      type: FieldType.NUMBER,
      name: "leaseTermYears",
      label: "Lease Term (years)",
      icon: "IconCalendarTime",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: LISTING_LISTING_SOURCE_FIELD_ID,
      type: FieldType.SELECT,
      name: "listingSource",
      label: "Source",
      icon: "IconSourceCode",
      isNullable: true,
      options: [
      { value: "OUR_MANDATE", label: "Our Mandate", position: 0, color: "green" },
      { value: "EXTERNAL", label: "External", position: 1, color: "gray" },
      { value: "DIRECT_OWNER", label: "Direct Owner", position: 2, color: "blue" },
      { value: "BUILDER_INVENTORY", label: "Builder Inventory", position: 3, color: "purple" },
      ],
    },
    {
      universalIdentifier: LISTING_RENT_ESCALATION_PCT_FIELD_ID,
      type: FieldType.NUMBER,
      name: "rentEscalationPct",
      label: "Rent Escalation %",
      description: "Typical: 5 percent yearly, or 15 percent every 3 years.",
      icon: "IconTrendingUp",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.FLOAT },
    },
    {
      universalIdentifier: LISTING_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: "name",
      label: "Name",
      description: "Name",
      icon: "IconAbc",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_SECURITY_DEPOSIT_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "securityDeposit",
      label: "Security Deposit",
      description: "2-3 months in the north, up to 10 months in Bangalore.",
      icon: "IconLock",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_VISIT_INSTRUCTIONS_FIELD_ID,
      type: FieldType.TEXT,
      name: "visitInstructions",
      label: "Visit Instructions",
      icon: "IconInfoCircle",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_OTHER_CHARGES_FIELD_ID,
      type: FieldType.TEXT,
      name: "otherCharges",
      label: "Other Charges",
      description: "PLC, EDC/IDC, car parking, club membership, maintenance deposit.",
      icon: "IconPlus",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_MAINTENANCE_CHARGES_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "maintenanceCharges",
      label: "Maintenance Charges",
      icon: "IconTool",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_MONTHLY_RENT_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "monthlyRent",
      label: "Monthly Rent",
      icon: "IconCash",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_NOTICE_PERIOD_MONTHS_FIELD_ID,
      type: FieldType.NUMBER,
      name: "noticePeriodMonths",
      label: "Notice Period (months)",
      icon: "IconBell",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: LISTING_SEATING_CAPACITY_FIELD_ID,
      type: FieldType.NUMBER,
      name: "seatingCapacity",
      label: "Seating Capacity",
      icon: "IconArmchair",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: LISTING_RERA_AGENT_NUMBER_FIELD_ID,
      type: FieldType.TEXT,
      name: "reraAgentNumber",
      label: "RERA Agent Number",
      description: "Legally required on every advertisement.",
      icon: "IconShieldCheck",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_TENANT_PREFERENCE_FIELD_ID,
      type: FieldType.MULTI_SELECT,
      name: "tenantPreference",
      label: "Tenant Preference",
      icon: "IconUsers",
      isNullable: true,
      options: [
      { value: "FAMILY", label: "Family", position: 0, color: "green" },
      { value: "BACHELORS", label: "Bachelors", position: 1, color: "turquoise" },
      { value: "COMPANY", label: "Company Lease", position: 2, color: "sky" },
      { value: "STUDENTS", label: "Students", position: 3, color: "blue" },
      { value: "ANY", label: "Any", position: 4, color: "purple" },
      ],
    },
    {
      universalIdentifier: LISTING_DAYS_ON_MARKET_FIELD_ID,
      type: FieldType.NUMBER,
      name: "daysOnMarket",
      label: "Days on Market",
      icon: "IconClock",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: LISTING_PRICE_PER_SQ_FT_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "pricePerSqFt",
      label: "Price / Sq Ft",
      description: "How Indian buyers compare properties.",
      icon: "IconRuler2",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_PORTALS_FIELD_ID,
      type: FieldType.MULTI_SELECT,
      name: "portals",
      label: "Posted On",
      icon: "IconWorldWww",
      isNullable: true,
      options: [
      { value: "ACRES99", label: "99acres", position: 0, color: "green" },
      { value: "MAGICBRICKS", label: "MagicBricks", position: 1, color: "turquoise" },
      { value: "HOUSING", label: "Housing.com", position: 2, color: "sky" },
      { value: "NOBROKER", label: "NoBroker", position: 3, color: "blue" },
      { value: "SQUARE_YARDS", label: "Square Yards", position: 4, color: "purple" },
      { value: "OWN_WEBSITE", label: "Own Website", position: 5, color: "pink" },
      { value: "FACEBOOK", label: "Facebook", position: 6, color: "red" },
      { value: "INSTAGRAM", label: "Instagram", position: 7, color: "orange" },
      { value: "WHATSAPP", label: "WhatsApp Groups", position: 8, color: "yellow" },
      ],
    },
    {
      universalIdentifier: LISTING_PETS_ALLOWED_FIELD_ID,
      type: FieldType.BOOLEAN,
      name: "petsAllowed",
      label: "Pets Allowed",
      icon: "IconPaw",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_AVAILABLE_FROM_FIELD_ID,
      type: FieldType.DATE,
      name: "availableFrom",
      label: "Available From",
      icon: "IconCalendarPlus",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_KEY_AVAILABLE_WITH_FIELD_ID,
      type: FieldType.TEXT,
      name: "keyAvailableWith",
      label: "Key Available With",
      icon: "IconKey",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_LISTING_FOR_FIELD_ID,
      type: FieldType.SELECT,
      name: "listingFor",
      label: "Listing For",
      icon: "IconTag",
      isNullable: true,
      options: [
      { value: "SALE", label: "Sale", position: 0, color: "green" },
      { value: "RENT", label: "Rent", position: 1, color: "blue" },
      { value: "LEASE", label: "Lease (Commercial)", position: 2, color: "purple" },
      { value: "PG", label: "PG / Co-living", position: 3, color: "sky" },
      ],
    },
    {
      universalIdentifier: LISTING_CABINS_FIELD_ID,
      type: FieldType.NUMBER,
      name: "cabins",
      label: "Cabins",
      icon: "IconDoor",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: LISTING_MAINTENANCE_INCLUDED_FIELD_ID,
      type: FieldType.BOOLEAN,
      name: "maintenanceIncluded",
      label: "Maintenance Included",
      icon: "IconCheck",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_LISTING_STATUS_FIELD_ID,
      type: FieldType.SELECT,
      name: "listingStatus",
      label: "Status",
      icon: "IconProgress",
      isNullable: true,
      options: [
      { value: "DRAFT", label: "Draft", position: 0, color: "gray" },
      { value: "ACTIVE", label: "Active", position: 1, color: "green" },
      { value: "UNDER_NEGOTIATION", label: "Under Negotiation", position: 2, color: "yellow" },
      { value: "TOKEN_RECEIVED", label: "Token Received", position: 3, color: "turquoise" },
      { value: "AGREEMENT_SIGNED", label: "Agreement Signed", position: 4, color: "sky" },
      { value: "CLOSED", label: "Closed", position: 5, color: "blue" },
      { value: "EXPIRED", label: "Expired", position: 6, color: "orange" },
      { value: "WITHDRAWN", label: "Withdrawn", position: 7, color: "red" },
      { value: "ON_HOLD", label: "On Hold", position: 8, color: "purple" },
      ],
    },
    {
      universalIdentifier: LISTING_MANDATE_TYPE_FIELD_ID,
      type: FieldType.SELECT,
      name: "mandateType",
      label: "Mandate Type",
      icon: "IconFileCertificate",
      isNullable: true,
      options: [
      { value: "EXCLUSIVE", label: "Exclusive", position: 0, color: "green" },
      { value: "NON_EXCLUSIVE", label: "Non-Exclusive", position: 1, color: "yellow" },
      { value: "OPEN", label: "Open", position: 2, color: "gray" },
      ],
    },
    {
      universalIdentifier: LISTING_PORTAL_MAGIC_BRICKS_ID_FIELD_ID,
      type: FieldType.TEXT,
      name: "portalMagicBricksId",
      label: "MagicBricks ID",
      icon: "IconHash",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_ESCALATION_FREQUENCY_YEARS_FIELD_ID,
      type: FieldType.NUMBER,
      name: "escalationFrequencyYears",
      label: "Escalation Every (years)",
      icon: "IconRepeat",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: LISTING_LISTED_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: "listedDate",
      label: "Listed Date",
      icon: "IconCalendarPlus",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_ALL_INCLUSIVE_FIELD_ID,
      type: FieldType.BOOLEAN,
      name: "allInclusive",
      label: "All Inclusive Price",
      description: "Whether the quoted price includes registration, GST, parking and club charges.",
      icon: "IconReceipt",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_LOCK_IN_PERIOD_MONTHS_FIELD_ID,
      type: FieldType.NUMBER,
      name: "lockInPeriodMonths",
      label: "Lock-in (months)",
      icon: "IconLock",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: LISTING_PORTAL99ACRES_ID_FIELD_ID,
      type: FieldType.TEXT,
      name: "portal99acresId",
      label: "99acres ID",
      icon: "IconHash",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_EXPECTED_PRICE_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "expectedPrice",
      label: "Expected Price",
      icon: "IconCurrencyRupee",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_PORTAL_HOUSING_ID_FIELD_ID,
      type: FieldType.TEXT,
      name: "portalHousingId",
      label: "Housing.com ID",
      icon: "IconHash",
      isNullable: true,
    },
    {
      universalIdentifier: LISTING_PRICE_NEGOTIABLE_FIELD_ID,
      type: FieldType.BOOLEAN,
      name: "priceNegotiable",
      label: "Negotiable",
      icon: "IconArrowsExchange",
      isNullable: true,
    },
  ],
});
