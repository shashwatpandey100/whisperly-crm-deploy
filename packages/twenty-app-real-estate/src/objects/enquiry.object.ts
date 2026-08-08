import { defineObject, FieldType, NumberDataType } from 'twenty-sdk/define';

export const ENQUIRY_UNIVERSAL_IDENTIFIER = "5e72b274-378e-4b8d-9bb2-fc8dd2335736";
export const ENQUIRY_CLIENT_FEEDBACK_FIELD_ID = "9c35a25b-89ef-48d9-a68d-8b050bbf289a";
export const ENQUIRY_ENQUIRY_TYPE_FIELD_ID = "fbc8d467-460f-4bd6-bf13-64edb7f30420";
export const ENQUIRY_ACCOMPANIED_BY_FAMILY_FIELD_ID = "66c544d0-4587-49cf-b0e7-77e8ebfd25c9";
export const ENQUIRY_SCHEDULED_AT_FIELD_ID = "e0a25db5-6915-40c9-847a-c8450a510f41";
export const ENQUIRY_OBJECTIONS_FIELD_ID = "621ce21f-8abd-4616-964d-8f4b876c7eae";
export const ENQUIRY_INTEREST_LEVEL_FIELD_ID = "517012c2-58f1-41de-9b35-f323d42b2d5d";
export const ENQUIRY_PRICE_OPINION_FIELD_ID = "ef5cacac-38ac-4b52-aa41-b009db4033eb";
export const ENQUIRY_VISIT_COUNT_FIELD_ID = "3c8e1a87-d858-46c2-a775-803d39ffbf27";
export const ENQUIRY_FEEDBACK_SHARED_WITH_OWNER_FIELD_ID = "766719c0-f5f4-40f7-9551-1c8aacf72908";
export const ENQUIRY_NAME_FIELD_ID = "b816cbca-d00d-5b4d-8fc3-b0e120ef1459";
export const ENQUIRY_ENQUIRY_STATUS_FIELD_ID = "582e2ee4-7794-4aca-8598-384c159c48d2";
export const ENQUIRY_AGENT_NOTES_FIELD_ID = "e0ba4157-9b7d-4361-ac43-3d6c2dacbf4a";

export default defineObject({
  universalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  nameSingular: "enquiry",
  namePlural: "enquiries",
  labelSingular: "Enquiry",
  labelPlural: "Enquiries",
  description: "A client enquiry or site visit against a property.",
  icon: "IconPhoneCall",
  labelIdentifierFieldMetadataUniversalIdentifier: ENQUIRY_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: ENQUIRY_CLIENT_FEEDBACK_FIELD_ID,
      type: FieldType.TEXT,
      name: "clientFeedback",
      label: "Client Feedback",
      description: "Shareable with the owner.",
      icon: "IconMessage",
      isNullable: true,
    },
    {
      universalIdentifier: ENQUIRY_ENQUIRY_TYPE_FIELD_ID,
      type: FieldType.SELECT,
      name: "enquiryType",
      label: "Enquiry Type",
      icon: "IconPhoneCall",
      isNullable: true,
      options: [
      { value: "PORTAL", label: "Portal Enquiry", position: 0, color: "blue" },
      { value: "PHONE", label: "Phone Call", position: 1, color: "green" },
      { value: "WHATSAPP", label: "WhatsApp", position: 2, color: "turquoise" },
      { value: "WALK_IN", label: "Walk-in", position: 3, color: "purple" },
      { value: "SITE_VISIT", label: "Site Visit", position: 4, color: "orange" },
      { value: "VIRTUAL_TOUR", label: "Virtual Tour", position: 5, color: "sky" },
      { value: "REFERRAL", label: "Referral", position: 6, color: "pink" },
      ],
    },
    {
      universalIdentifier: ENQUIRY_ACCOMPANIED_BY_FAMILY_FIELD_ID,
      type: FieldType.BOOLEAN,
      name: "accompaniedByFamily",
      label: "Family Accompanied",
      description: "Family involvement is a strong buying signal in India.",
      icon: "IconUsers",
      isNullable: true,
    },
    {
      universalIdentifier: ENQUIRY_SCHEDULED_AT_FIELD_ID,
      type: FieldType.DATE_TIME,
      name: "scheduledAt",
      label: "Scheduled At",
      description: "Drives the site visit calendar.",
      icon: "IconCalendarEvent",
      isNullable: true,
    },
    {
      universalIdentifier: ENQUIRY_OBJECTIONS_FIELD_ID,
      type: FieldType.MULTI_SELECT,
      name: "objections",
      label: "Objections",
      icon: "IconAlertCircle",
      isNullable: true,
      options: [
      { value: "PRICE", label: "Price", position: 0, color: "green" },
      { value: "LOCATION", label: "Location", position: 1, color: "turquoise" },
      { value: "VASTU", label: "Vastu", position: 2, color: "sky" },
      { value: "FLOOR", label: "Floor", position: 3, color: "blue" },
      { value: "CARPET_AREA", label: "Carpet Area", position: 4, color: "purple" },
      { value: "CONDITION", label: "Condition", position: 5, color: "pink" },
      { value: "LEGAL", label: "Legal / Khata", position: 6, color: "red" },
      { value: "LOAN", label: "Loan Eligibility", position: 7, color: "orange" },
      { value: "POSSESSION", label: "Possession Timeline", position: 8, color: "yellow" },
      { value: "PARKING", label: "Parking", position: 9, color: "gray" },
      { value: "MAINTENANCE", label: "Maintenance Cost", position: 10, color: "green" },
      { value: "NEIGHBOURHOOD", label: "Neighbourhood", position: 11, color: "turquoise" },
      ],
    },
    {
      universalIdentifier: ENQUIRY_INTEREST_LEVEL_FIELD_ID,
      type: FieldType.SELECT,
      name: "interestLevel",
      label: "Interest Level",
      icon: "IconFlame",
      isNullable: true,
      options: [
      { value: "HOT", label: "Hot", position: 0, color: "red" },
      { value: "WARM", label: "Warm", position: 1, color: "orange" },
      { value: "COLD", label: "Cold", position: 2, color: "sky" },
      { value: "NOT_INTERESTED", label: "Not Interested", position: 3, color: "gray" },
      ],
    },
    {
      universalIdentifier: ENQUIRY_PRICE_OPINION_FIELD_ID,
      type: FieldType.SELECT,
      name: "priceOpinion",
      label: "Price Opinion",
      icon: "IconScale",
      isNullable: true,
      options: [
      { value: "OVERPRICED", label: "Overpriced", position: 0, color: "red" },
      { value: "FAIR", label: "Fair", position: 1, color: "green" },
      { value: "UNDERPRICED", label: "Underpriced", position: 2, color: "turquoise" },
      ],
    },
    {
      universalIdentifier: ENQUIRY_VISIT_COUNT_FIELD_ID,
      type: FieldType.NUMBER,
      name: "visitCount",
      label: "Visit Number",
      description: "Second and third visits signal real intent.",
      icon: "IconRepeat",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: ENQUIRY_FEEDBACK_SHARED_WITH_OWNER_FIELD_ID,
      type: FieldType.BOOLEAN,
      name: "feedbackSharedWithOwner",
      label: "Feedback Shared",
      icon: "IconSend",
      isNullable: true,
    },
    {
      universalIdentifier: ENQUIRY_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: "name",
      label: "Name",
      description: "Name",
      icon: "IconAbc",
      isNullable: true,
    },
    {
      universalIdentifier: ENQUIRY_ENQUIRY_STATUS_FIELD_ID,
      type: FieldType.SELECT,
      name: "enquiryStatus",
      label: "Status",
      icon: "IconProgress",
      isNullable: true,
      options: [
      { value: "REQUESTED", label: "Requested", position: 0, color: "gray" },
      { value: "SCHEDULED", label: "Scheduled", position: 1, color: "blue" },
      { value: "VISIT_DONE", label: "Visit Done", position: 2, color: "green" },
      { value: "NO_SHOW", label: "No Show", position: 3, color: "red" },
      { value: "CANCELLED", label: "Cancelled", position: 4, color: "orange" },
      { value: "RESCHEDULED", label: "Rescheduled", position: 5, color: "yellow" },
      ],
    },
    {
      universalIdentifier: ENQUIRY_AGENT_NOTES_FIELD_ID,
      type: FieldType.TEXT,
      name: "agentNotes",
      label: "Agent Notes",
      description: "Internal. Not shared with the owner.",
      icon: "IconNotes",
      isNullable: true,
    },
  ],
});
