import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_CANCELLATION_REASON_FIELD_ID = "5015e194-2d05-454c-bfd5-4d8002c72efb";

export default defineField({
  universalIdentifier: OPPORTUNITY_CANCELLATION_REASON_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.SELECT,
  name: "cancellationReason",
  label: "Cancellation Reason",
  icon: "IconCircleX",
  isNullable: true,
  options: [
    { value: "LOAN_REJECTED", label: "Loan Rejected", position: 0, color: "red" },
    { value: "TITLE_DEFECT", label: "Title Defect", position: 1, color: "red" },
    { value: "BUYER_BACKED_OUT", label: "Buyer Backed Out", position: 2, color: "orange" },
    { value: "SELLER_BACKED_OUT", label: "Seller Backed Out", position: 3, color: "orange" },
    { value: "PRICE_DISAGREEMENT", label: "Price Disagreement", position: 4, color: "yellow" },
    { value: "APPROVAL_ISSUE", label: "Khata / Approval Issue", position: 5, color: "red" },
    { value: "FUNDING_SHORTFALL", label: "Funding Shortfall", position: 6, color: "orange" },
    { value: "FAMILY_OBJECTION", label: "Family Objection", position: 7, color: "gray" },
  ],
});
