import { defineObject, FieldType, NumberDataType } from 'twenty-sdk/define';

export const NEGOTIATION_UNIVERSAL_IDENTIFIER = "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19";
export const NEGOTIATION_POSSESSION_TERMS_FIELD_ID = "b53c13bb-ff0a-4a9a-a154-417affe838a3";
export const NEGOTIATION_TOKEN_REFUNDABLE_FIELD_ID = "1d87f64d-892d-44ed-85bf-d832608ec168";
export const NEGOTIATION_LOAN_AMOUNT_FIELD_ID = "ec738d38-ec7c-4d2a-9f56-fdc1cc4fcf21";
export const NEGOTIATION_TOKEN_PAID_DATE_FIELD_ID = "7c3e9d1b-4875-4b90-9ce0-5765fd5215f4";
export const NEGOTIATION_REPRESENTATION_SIDE_FIELD_ID = "336601ec-636a-462b-bed7-de30b3ddeeed";
export const NEGOTIATION_PAYMENT_MODE_FIELD_ID = "32f71ede-46e2-4493-9211-b1ca5c83e570";
export const NEGOTIATION_NAME_FIELD_ID = "1272d3b0-3447-50e9-809d-2b71a1c9e83b";
export const NEGOTIATION_NEGOTIATION_STATUS_FIELD_ID = "7ececb8a-52b7-4647-b016-4dbb8bf9ba2a";
export const NEGOTIATION_COUNTER_ROUND_FIELD_ID = "eb9475a8-6131-489d-aa3e-6f79c535abac";
export const NEGOTIATION_PROPOSED_REGISTRATION_DATE_FIELD_ID = "c9274f40-3998-436f-a14d-7e1fda3a82eb";
export const NEGOTIATION_LOAN_REQUIRED_FIELD_ID = "b8cf565a-4139-4278-86f1-0afe3274f0ec";
export const NEGOTIATION_VALID_UNTIL_FIELD_ID = "0815b199-9454-4dbb-8aea-4cf1a3f9bb54";
export const NEGOTIATION_INCLUSIONS_FIELD_ID = "4d312127-572f-44c6-8087-016b70101f2a";
export const NEGOTIATION_DEAL_TYPE_FIELD_ID = "ef11c07c-f326-497c-bb76-5d67ad9a260a";
export const NEGOTIATION_TOKEN_AMOUNT_FIELD_ID = "43c4925b-669e-4ea1-a629-4aeb79e4b62f";
export const NEGOTIATION_OFFERED_PRICE_FIELD_ID = "9c4a6626-1e3a-4a22-b346-3eb55052125b";
export const NEGOTIATION_TOKEN_RECEIPT_NUMBER_FIELD_ID = "176e68c1-3a55-4704-a60b-e678502be7c2";

export default defineObject({
  universalIdentifier: NEGOTIATION_UNIVERSAL_IDENTIFIER,
  nameSingular: "negotiation",
  namePlural: "negotiations",
  labelSingular: "Negotiation",
  labelPlural: "Negotiations",
  description: "Price negotiation and token payment.",
  icon: "IconGavel",
  labelIdentifierFieldMetadataUniversalIdentifier: NEGOTIATION_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: NEGOTIATION_POSSESSION_TERMS_FIELD_ID,
      type: FieldType.TEXT,
      name: "possessionTerms",
      label: "Possession Terms",
      icon: "IconKey",
      isNullable: true,
    },
    {
      universalIdentifier: NEGOTIATION_TOKEN_REFUNDABLE_FIELD_ID,
      type: FieldType.BOOLEAN,
      name: "tokenRefundable",
      label: "Token Refundable",
      description: "Forfeiture terms are a common source of dispute. Record them.",
      icon: "IconArrowBack",
      isNullable: true,
    },
    {
      universalIdentifier: NEGOTIATION_LOAN_AMOUNT_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "loanAmount",
      label: "Loan Amount",
      icon: "IconBuildingBank",
      isNullable: true,
    },
    {
      universalIdentifier: NEGOTIATION_TOKEN_PAID_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: "tokenPaidDate",
      label: "Token Paid On",
      icon: "IconCalendarCheck",
      isNullable: true,
    },
    {
      universalIdentifier: NEGOTIATION_REPRESENTATION_SIDE_FIELD_ID,
      type: FieldType.SELECT,
      name: "representationSide",
      label: "We Represent",
      icon: "IconUserCheck",
      isNullable: true,
      options: [
      { value: "SELLER", label: "Seller / Owner", position: 0, color: "blue" },
      { value: "BUYER", label: "Buyer / Tenant", position: 1, color: "green" },
      { value: "BOTH", label: "Both Sides", position: 2, color: "orange" },
      ],
    },
    {
      universalIdentifier: NEGOTIATION_PAYMENT_MODE_FIELD_ID,
      type: FieldType.SELECT,
      name: "paymentMode",
      label: "Payment Mode",
      icon: "IconCreditCard",
      isNullable: true,
      options: [
      { value: "BANK_TRANSFER", label: "Bank Transfer", position: 0, color: "green" },
      { value: "CHEQUE", label: "Cheque", position: 1, color: "turquoise" },
      { value: "UPI", label: "UPI", position: 2, color: "sky" },
      { value: "DEMAND_DRAFT", label: "Demand Draft", position: 3, color: "blue" },
      { value: "HOME_LOAN", label: "Home Loan", position: 4, color: "purple" },
      ],
    },
    {
      universalIdentifier: NEGOTIATION_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: "name",
      label: "Name",
      description: "Name",
      icon: "IconAbc",
      isNullable: true,
    },
    {
      universalIdentifier: NEGOTIATION_NEGOTIATION_STATUS_FIELD_ID,
      type: FieldType.SELECT,
      name: "negotiationStatus",
      label: "Status",
      icon: "IconProgress",
      isNullable: true,
      options: [
      { value: "DRAFT", label: "Draft", position: 0, color: "gray" },
      { value: "OFFERED", label: "Offered", position: 1, color: "blue" },
      { value: "COUNTERED_BY_OWNER", label: "Countered by Owner", position: 2, color: "orange" },
      { value: "COUNTERED_BY_CLIENT", label: "Countered by Client", position: 3, color: "yellow" },
      { value: "VERBALLY_AGREED", label: "Verbally Agreed", position: 4, color: "turquoise" },
      { value: "TOKEN_RECEIVED", label: "Token Received", position: 5, color: "green" },
      { value: "ACCEPTED", label: "Accepted", position: 6, color: "green" },
      { value: "REJECTED", label: "Rejected", position: 7, color: "red" },
      { value: "WITHDRAWN", label: "Withdrawn", position: 8, color: "gray" },
      { value: "LAPSED", label: "Lapsed", position: 9, color: "gray" },
      ],
    },
    {
      universalIdentifier: NEGOTIATION_COUNTER_ROUND_FIELD_ID,
      type: FieldType.NUMBER,
      name: "counterRound",
      label: "Counter Round",
      icon: "IconRepeat",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: NEGOTIATION_PROPOSED_REGISTRATION_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: "proposedRegistrationDate",
      label: "Proposed Registration",
      icon: "IconCalendar",
      isNullable: true,
    },
    {
      universalIdentifier: NEGOTIATION_LOAN_REQUIRED_FIELD_ID,
      type: FieldType.BOOLEAN,
      name: "loanRequired",
      label: "Loan Required",
      icon: "IconBuildingBank",
      isNullable: true,
    },
    {
      universalIdentifier: NEGOTIATION_VALID_UNTIL_FIELD_ID,
      type: FieldType.DATE,
      name: "validUntil",
      label: "Valid Until",
      icon: "IconClockX",
      isNullable: true,
    },
    {
      universalIdentifier: NEGOTIATION_INCLUSIONS_FIELD_ID,
      type: FieldType.TEXT,
      name: "inclusions",
      label: "Inclusions",
      description: "Fittings, wardrobes, ACs. A frequent source of last-minute disputes.",
      icon: "IconPackage",
      isNullable: true,
    },
    {
      universalIdentifier: NEGOTIATION_DEAL_TYPE_FIELD_ID,
      type: FieldType.SELECT,
      name: "dealType",
      label: "Deal Type",
      icon: "IconExchange",
      isNullable: true,
      options: [
      { value: "SALE", label: "Sale", position: 0, color: "green" },
      { value: "RENT", label: "Rent", position: 1, color: "blue" },
      { value: "LEASE", label: "Lease", position: 2, color: "purple" },
      ],
    },
    {
      universalIdentifier: NEGOTIATION_TOKEN_AMOUNT_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "tokenAmount",
      label: "Token Amount",
      icon: "IconCoin",
      isNullable: true,
    },
    {
      universalIdentifier: NEGOTIATION_OFFERED_PRICE_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "offeredPrice",
      label: "Offered Price",
      icon: "IconCurrencyRupee",
      isNullable: true,
    },
    {
      universalIdentifier: NEGOTIATION_TOKEN_RECEIPT_NUMBER_FIELD_ID,
      type: FieldType.TEXT,
      name: "tokenReceiptNumber",
      label: "Token Receipt No.",
      icon: "IconReceipt",
      isNullable: true,
    },
  ],
});
