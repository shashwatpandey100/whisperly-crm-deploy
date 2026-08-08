import { defineObject, FieldType, NumberDataType } from 'twenty-sdk/define';

export const PROJECT_UNIVERSAL_IDENTIFIER = "c0e6df6f-ea5c-46a8-8b3a-27dfb28c10ca";
export const PROJECT_PROJECT_ADDRESS_FIELD_ID = "c437f82c-23e7-4cdf-96c8-90a68de87810";
export const PROJECT_REVISED_POSSESSION_DATE_FIELD_ID = "935b939e-4e7d-4ac6-8cff-8e4fd57f784c";
export const PROJECT_PRICE_RANGE_MAX_FIELD_ID = "2b7cd064-f651-4656-ae27-a64567958fa7";
export const PROJECT_PROJECT_STATUS_FIELD_ID = "09a6d558-72b8-48c8-a9a9-9b53ace50584";
export const PROJECT_APPROVALS_FIELD_ID = "64fe7d66-0c38-47c5-9319-bb2b115833f4";
export const PROJECT_PROJECT_TYPE_FIELD_ID = "1fcacdb0-aa07-4c3f-b780-deb7b3f3244f";
export const PROJECT_NAME_FIELD_ID = "0ccb69ee-6ef9-5530-9e40-c3d463b13e6b";
export const PROJECT_PROJECT_TOTAL_FLOORS_FIELD_ID = "67f5a747-d358-465d-9451-0dfb83017687";
export const PROJECT_LAUNCH_DATE_FIELD_ID = "62b1f910-33b1-4703-8e44-502196e98e52";
export const PROJECT_AMENITIES_FIELD_ID = "28c04d60-8a34-405b-8f36-f0edc7b07583";
export const PROJECT_TOTAL_TOWERS_FIELD_ID = "9a260844-f82d-45f0-b1ba-fca31e8ad6e5";
export const PROJECT_RERA_NUMBER_FIELD_ID = "5dbb4d5f-2834-4dc6-8fa7-02879443c5a3";
export const PROJECT_TOTAL_UNITS_FIELD_ID = "5bcfc5c7-fc9a-41c0-98aa-0ae436bb2e7c";
export const PROJECT_RERA_EXPIRY_DATE_FIELD_ID = "b8fea77d-3436-4625-a82a-ff26b152a73c";
export const PROJECT_PRICE_RANGE_MIN_FIELD_ID = "53aa8082-f2aa-4d97-8c97-b0249bfcd367";
export const PROJECT_PROMISED_POSSESSION_DATE_FIELD_ID = "4c24b071-2f3b-46a5-b83a-dd30fdc580f7";
export const PROJECT_BROCHURE_FIELD_ID = "f6dbca99-6e98-450e-9ef1-fd362015c640";
export const PROJECT_LAND_AREA_ACRES_FIELD_ID = "c84a3c27-7d46-40e7-bd2a-b4354271f0f3";

export default defineObject({
  universalIdentifier: PROJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: "project",
  namePlural: "projects",
  labelSingular: "Project",
  labelPlural: "Projects",
  description: "Builder development containing many units. Holds RERA registration and approvals.",
  icon: "IconBuildingSkyscraper",
  labelIdentifierFieldMetadataUniversalIdentifier: PROJECT_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: PROJECT_PROJECT_ADDRESS_FIELD_ID,
      type: FieldType.ADDRESS,
      name: "projectAddress",
      label: "Location",
      icon: "IconMapPin",
      isNullable: true,
    },
    {
      universalIdentifier: PROJECT_REVISED_POSSESSION_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: "revisedPossessionDate",
      label: "Revised Possession",
      description: "Delay against the promised date is a real buyer concern. Track both.",
      icon: "IconCalendarStats",
      isNullable: true,
    },
    {
      universalIdentifier: PROJECT_PRICE_RANGE_MAX_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "priceRangeMax",
      label: "Price To",
      icon: "IconCurrencyRupee",
      isNullable: true,
    },
    {
      universalIdentifier: PROJECT_PROJECT_STATUS_FIELD_ID,
      type: FieldType.SELECT,
      name: "projectStatus",
      label: "Status",
      icon: "IconProgress",
      isNullable: true,
      options: [
      { value: "PRE_LAUNCH", label: "Pre-Launch", position: 0, color: "gray" },
      { value: "NEW_LAUNCH", label: "New Launch", position: 1, color: "blue" },
      { value: "UNDER_CONSTRUCTION", label: "Under Construction", position: 2, color: "orange" },
      { value: "NEARING_POSSESSION", label: "Nearing Possession", position: 3, color: "yellow" },
      { value: "READY_TO_MOVE", label: "Ready to Move", position: 4, color: "green" },
      { value: "COMPLETED", label: "Completed", position: 5, color: "turquoise" },
      ],
    },
    {
      universalIdentifier: PROJECT_APPROVALS_FIELD_ID,
      type: FieldType.MULTI_SELECT,
      name: "approvals",
      label: "Approvals",
      icon: "IconStamp",
      isNullable: true,
      options: [
      { value: "RERA", label: "RERA", position: 0, color: "green" },
      { value: "COMMENCEMENT", label: "Commencement Certificate", position: 1, color: "turquoise" },
      { value: "OC", label: "Occupancy Certificate", position: 2, color: "sky" },
      { value: "CC", label: "Completion Certificate", position: 3, color: "blue" },
      { value: "FIRE_NOC", label: "Fire NOC", position: 4, color: "purple" },
      { value: "ENVIRONMENT", label: "Environment Clearance", position: 5, color: "pink" },
      { value: "ELECTRICITY", label: "Electricity Board", position: 6, color: "red" },
      { value: "WATER", label: "Water Board", position: 7, color: "orange" },
      ],
    },
    {
      universalIdentifier: PROJECT_PROJECT_TYPE_FIELD_ID,
      type: FieldType.SELECT,
      name: "projectType",
      label: "Project Type",
      icon: "IconBuildingCommunity",
      isNullable: true,
      options: [
      { value: "APARTMENT", label: "Apartment", position: 0, color: "blue" },
      { value: "VILLA", label: "Villa", position: 1, color: "blue" },
      { value: "PLOTTED", label: "Plotted Development", position: 2, color: "turquoise" },
      { value: "ROW_HOUSE", label: "Row House", position: 3, color: "blue" },
      { value: "COMMERCIAL_OFFICE", label: "Commercial Office", position: 4, color: "purple" },
      { value: "RETAIL", label: "Retail", position: 5, color: "purple" },
      { value: "MIXED_USE", label: "Mixed Use", position: 6, color: "pink" },
      { value: "WAREHOUSE", label: "Warehouse", position: 7, color: "orange" },
      { value: "CO_LIVING", label: "Co-living", position: 8, color: "sky" },
      ],
    },
    {
      universalIdentifier: PROJECT_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: "name",
      label: "Name",
      description: "Name",
      icon: "IconAbc",
      isNullable: true,
    },
    {
      universalIdentifier: PROJECT_PROJECT_TOTAL_FLOORS_FIELD_ID,
      type: FieldType.NUMBER,
      name: "projectTotalFloors",
      label: "Floors per Tower",
      icon: "IconStairs",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: PROJECT_LAUNCH_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: "launchDate",
      label: "Launch Date",
      icon: "IconRocket",
      isNullable: true,
    },
    {
      universalIdentifier: PROJECT_AMENITIES_FIELD_ID,
      type: FieldType.MULTI_SELECT,
      name: "amenities",
      label: "Amenities",
      icon: "IconSparkles",
      isNullable: true,
      options: [
      { value: "CLUBHOUSE", label: "Clubhouse", position: 0, color: "green" },
      { value: "GYM", label: "Gym", position: 1, color: "turquoise" },
      { value: "POOL", label: "Swimming Pool", position: 2, color: "sky" },
      { value: "PLAY_AREA", label: "Kids Play Area", position: 3, color: "blue" },
      { value: "POWER_BACKUP", label: "Power Backup", position: 4, color: "purple" },
      { value: "SECURITY", label: "24x7 Security", position: 5, color: "pink" },
      { value: "LIFT", label: "Lift", position: 6, color: "red" },
      { value: "PARKING", label: "Parking", position: 7, color: "orange" },
      { value: "GARDEN", label: "Landscaped Garden", position: 8, color: "yellow" },
      { value: "SPORTS", label: "Sports Court", position: 9, color: "gray" },
      { value: "JOGGING_TRACK", label: "Jogging Track", position: 10, color: "green" },
      { value: "AMPHITHEATRE", label: "Amphitheatre", position: 11, color: "turquoise" },
      ],
    },
    {
      universalIdentifier: PROJECT_TOTAL_TOWERS_FIELD_ID,
      type: FieldType.NUMBER,
      name: "totalTowers",
      label: "Total Towers",
      icon: "IconBuildingSkyscraper",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: PROJECT_RERA_NUMBER_FIELD_ID,
      type: FieldType.TEXT,
      name: "reraNumber",
      label: "RERA Number",
      description: "Legally required on every advertisement in India.",
      icon: "IconShieldCheck",
      isNullable: true,
    },
    {
      universalIdentifier: PROJECT_TOTAL_UNITS_FIELD_ID,
      type: FieldType.NUMBER,
      name: "totalUnits",
      label: "Total Units",
      icon: "IconHome",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: PROJECT_RERA_EXPIRY_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: "reraExpiryDate",
      label: "RERA Expiry",
      icon: "IconCalendarX",
      isNullable: true,
    },
    {
      universalIdentifier: PROJECT_PRICE_RANGE_MIN_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "priceRangeMin",
      label: "Price From",
      icon: "IconCurrencyRupee",
      isNullable: true,
    },
    {
      universalIdentifier: PROJECT_PROMISED_POSSESSION_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: "promisedPossessionDate",
      label: "Promised Possession",
      icon: "IconCalendarEvent",
      isNullable: true,
    },
    {
      universalIdentifier: PROJECT_BROCHURE_FIELD_ID,
      type: FieldType.FILES,
      name: "brochure",
      label: "Brochure & Floor Plans",
      icon: "IconFileText",
      isNullable: true,
      universalSettings: {"maxNumberOfValues": 30},
    },
    {
      universalIdentifier: PROJECT_LAND_AREA_ACRES_FIELD_ID,
      type: FieldType.NUMBER,
      name: "landAreaAcres",
      label: "Land Area (acres)",
      icon: "IconVector",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.FLOAT },
    },
  ],
});
