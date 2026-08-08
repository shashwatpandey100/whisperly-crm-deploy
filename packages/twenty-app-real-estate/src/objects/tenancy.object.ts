import { defineObject, FieldType, NumberDataType } from 'twenty-sdk/define';

export const TENANCY_UNIVERSAL_IDENTIFIER = "43ad26e0-9739-4748-8c0b-5c18a917e219";
export const TENANCY_DEPOSIT_REFUNDED_FIELD_ID = "4bbd5cbd-1f4a-4a4a-ab55-513e63f13adc";
export const TENANCY_ESCALATION_FREQUENCY_MONTHS_FIELD_ID = "d12fde31-3af4-4ace-a56f-ba6f00e41693";
export const TENANCY_POLICE_VERIFICATION_DONE_FIELD_ID = "8b33a9ca-cf9e-46d9-961d-e8e7ac2b8c52";
export const TENANCY_VACATED_DATE_FIELD_ID = "9de85c41-c943-41f2-92f5-72adac15846f";
export const TENANCY_MAINTENANCE_PAID_BY_FIELD_ID = "a3763591-4b14-4093-a8ab-221978446575";
export const TENANCY_START_DATE_FIELD_ID = "3188cf60-583a-4b8f-ac98-1a287e79ca6b";
export const TENANCY_AGREEMENT_TYPE_FIELD_ID = "db913f5d-8953-4300-b539-4b372b7f8b51";
export const TENANCY_NEXT_ESCALATION_DATE_FIELD_ID = "1d671b67-9b53-4be6-b99b-0e4c9bc35ab7";
export const TENANCY_DEDUCTION_REASON_FIELD_ID = "8926e0fe-a420-4558-b31c-f53ed71c6d1b";
export const TENANCY_INVENTORY_LIST_FIELD_ID = "2bee52ad-8eda-45f2-b20a-394d91911bd8";
export const TENANCY_RENT_DUE_DAY_FIELD_ID = "a0697631-3ad3-4e35-ad03-8b32d5552e4d";
export const TENANCY_NAME_FIELD_ID = "33c5c2d1-9cd6-58f5-b213-185befebd6dc";
export const TENANCY_RENT_ESCALATION_PCT_FIELD_ID = "74d79b08-b6d1-4c2a-954f-fad22bc1fc70";
export const TENANCY_MONTHLY_RENT_FIELD_ID = "3c4adf4a-6a9d-4065-89f4-6304b158db6f";
export const TENANCY_SECURITY_DEPOSIT_FIELD_ID = "1d87da0b-ff8d-452f-a41d-50de74926016";
export const TENANCY_REGISTERED_FIELD_ID = "567e1167-613f-4d69-a02e-c29edbd22331";
export const TENANCY_NOTICE_PERIOD_MONTHS_FIELD_ID = "51275bff-9729-4ba3-9b6e-4c14652dd870";
export const TENANCY_DEPOSIT_DEDUCTIONS_FIELD_ID = "a99ffaac-b1e5-4292-9437-a160176216a7";
export const TENANCY_LOCK_IN_PERIOD_MONTHS_FIELD_ID = "0b674a30-c15f-4d37-929d-0e817e022c69";
export const TENANCY_END_DATE_FIELD_ID = "fdd5b1c6-8cda-4cb9-8aee-0d8525c6ad77";
export const TENANCY_TENANCY_STATUS_FIELD_ID = "6f6555fb-37af-4b62-8c60-bb520c9cf916";

export default defineObject({
  universalIdentifier: TENANCY_UNIVERSAL_IDENTIFIER,
  nameSingular: "tenancy",
  namePlural: "tenancies",
  labelSingular: "Tenancy",
  labelPlural: "Tenancies",
  description: "Ongoing lease lifecycle after a rental deal closes. Renewals, escalations, deposits.",
  icon: "IconKey",
  labelIdentifierFieldMetadataUniversalIdentifier: TENANCY_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: TENANCY_DEPOSIT_REFUNDED_FIELD_ID,
      type: FieldType.BOOLEAN,
      name: "depositRefunded",
      label: "Deposit Refunded",
      icon: "IconArrowBack",
      isNullable: true,
    },
    {
      universalIdentifier: TENANCY_ESCALATION_FREQUENCY_MONTHS_FIELD_ID,
      type: FieldType.NUMBER,
      name: "escalationFrequencyMonths",
      label: "Escalate Every (months)",
      icon: "IconRepeat",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: TENANCY_POLICE_VERIFICATION_DONE_FIELD_ID,
      type: FieldType.BOOLEAN,
      name: "policeVerificationDone",
      label: "Police Verification Done",
      description: "Mandatory in many Indian cities.",
      icon: "IconShieldCheck",
      isNullable: true,
    },
    {
      universalIdentifier: TENANCY_VACATED_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: "vacatedDate",
      label: "Vacated On",
      icon: "IconDoorExit",
      isNullable: true,
    },
    {
      universalIdentifier: TENANCY_MAINTENANCE_PAID_BY_FIELD_ID,
      type: FieldType.SELECT,
      name: "maintenancePaidBy",
      label: "Maintenance Paid By",
      icon: "IconTool",
      isNullable: true,
      options: [
      { value: "TENANT", label: "Tenant", position: 0, color: "blue" },
      { value: "LANDLORD", label: "Landlord", position: 1, color: "green" },
      { value: "SHARED", label: "Shared", position: 2, color: "yellow" },
      ],
    },
    {
      universalIdentifier: TENANCY_START_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: "startDate",
      label: "Start Date",
      icon: "IconCalendarPlus",
      isNullable: true,
    },
    {
      universalIdentifier: TENANCY_AGREEMENT_TYPE_FIELD_ID,
      type: FieldType.SELECT,
      name: "agreementType",
      label: "Agreement Type",
      icon: "IconFileCertificate",
      isNullable: true,
      options: [
      { value: "LEAVE_LICENSE", label: "Leave and License (11 month)", position: 0, color: "blue" },
      { value: "LEASE_DEED", label: "Lease Deed", position: 1, color: "purple" },
      { value: "COMMERCIAL_LEASE", label: "Commercial Lease", position: 2, color: "orange" },
      { value: "PG_AGREEMENT", label: "PG Agreement", position: 3, color: "sky" },
      ],
    },
    {
      universalIdentifier: TENANCY_NEXT_ESCALATION_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: "nextEscalationDate",
      label: "Next Escalation",
      icon: "IconCalendarStats",
      isNullable: true,
    },
    {
      universalIdentifier: TENANCY_DEDUCTION_REASON_FIELD_ID,
      type: FieldType.TEXT,
      name: "deductionReason",
      label: "Deduction Reason",
      description: "The most common source of end-of-tenancy disputes. Record it.",
      icon: "IconNotes",
      isNullable: true,
    },
    {
      universalIdentifier: TENANCY_INVENTORY_LIST_FIELD_ID,
      type: FieldType.FILES,
      name: "inventoryList",
      label: "Inventory / Handover Photos",
      description: "Fixture list and photos at handover. Protects both sides.",
      icon: "IconPhoto",
      isNullable: true,
      universalSettings: {"maxNumberOfValues": 40},
    },
    {
      universalIdentifier: TENANCY_RENT_DUE_DAY_FIELD_ID,
      type: FieldType.NUMBER,
      name: "rentDueDay",
      label: "Rent Due Day",
      description: "Day of the month.",
      icon: "IconCalendarDue",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: TENANCY_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: "name",
      label: "Name",
      description: "Name",
      icon: "IconAbc",
      isNullable: true,
    },
    {
      universalIdentifier: TENANCY_RENT_ESCALATION_PCT_FIELD_ID,
      type: FieldType.NUMBER,
      name: "rentEscalationPct",
      label: "Escalation %",
      description: "Typically 5 to 10 percent every 11 or 12 months.",
      icon: "IconTrendingUp",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.FLOAT },
    },
    {
      universalIdentifier: TENANCY_MONTHLY_RENT_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "monthlyRent",
      label: "Monthly Rent",
      icon: "IconCash",
      isNullable: true,
    },
    {
      universalIdentifier: TENANCY_SECURITY_DEPOSIT_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "securityDeposit",
      label: "Security Deposit",
      icon: "IconLock",
      isNullable: true,
    },
    {
      universalIdentifier: TENANCY_REGISTERED_FIELD_ID,
      type: FieldType.BOOLEAN,
      name: "registered",
      label: "Registered",
      icon: "IconFileCertificate",
      isNullable: true,
    },
    {
      universalIdentifier: TENANCY_NOTICE_PERIOD_MONTHS_FIELD_ID,
      type: FieldType.NUMBER,
      name: "noticePeriodMonths",
      label: "Notice Period (months)",
      icon: "IconBell",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: TENANCY_DEPOSIT_DEDUCTIONS_FIELD_ID,
      type: FieldType.CURRENCY,
      name: "depositDeductions",
      label: "Deposit Deductions",
      icon: "IconMinus",
      isNullable: true,
    },
    {
      universalIdentifier: TENANCY_LOCK_IN_PERIOD_MONTHS_FIELD_ID,
      type: FieldType.NUMBER,
      name: "lockInPeriodMonths",
      label: "Lock-in (months)",
      icon: "IconLock",
      isNullable: true,
      universalSettings: { dataType: NumberDataType.INT },
    },
    {
      universalIdentifier: TENANCY_END_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: "endDate",
      label: "End Date",
      description: "11 months is standard in India, to stay outside rent control.",
      icon: "IconCalendarX",
      isNullable: true,
    },
    {
      universalIdentifier: TENANCY_TENANCY_STATUS_FIELD_ID,
      type: FieldType.SELECT,
      name: "tenancyStatus",
      label: "Status",
      icon: "IconProgress",
      isNullable: true,
      options: [
      { value: "ACTIVE", label: "Active", position: 0, color: "green" },
      { value: "EXPIRING_SOON", label: "Expiring Soon", position: 1, color: "orange" },
      { value: "RENEWAL_IN_PROGRESS", label: "Renewal In Progress", position: 2, color: "yellow" },
      { value: "RENEWED", label: "Renewed", position: 3, color: "turquoise" },
      { value: "NOTICE_SERVED", label: "Notice Served", position: 4, color: "red" },
      { value: "VACATED", label: "Vacated", position: 5, color: "gray" },
      { value: "TERMINATED", label: "Terminated", position: 6, color: "gray" },
      { value: "IN_DISPUTE", label: "In Dispute", position: 7, color: "red" },
      ],
    },
  ],
});
