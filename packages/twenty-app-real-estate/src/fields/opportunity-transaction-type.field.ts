import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_TRANSACTION_TYPE_FIELD_ID = "0dd1c564-669a-4863-9f24-323547a8104e";

export default defineField({
  universalIdentifier: OPPORTUNITY_TRANSACTION_TYPE_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.SELECT,
  name: "transactionType",
  label: "Transaction Type",
  icon: "IconFileDescription",
  isNullable: true,
  options: [
    { value: "RESALE", label: "Resale", position: 0, color: "blue" },
    { value: "PRIMARY", label: "Primary / Builder Sale", position: 1, color: "purple" },
    { value: "UNDER_CONSTRUCTION", label: "Under Construction", position: 2, color: "orange" },
    { value: "PLOT_SALE", label: "Plot Sale", position: 3, color: "turquoise" },
    { value: "RENTAL", label: "Rental", position: 4, color: "sky" },
    { value: "COMMERCIAL_LEASE", label: "Commercial Lease", position: 5, color: "pink" },
    { value: "DISTRESS", label: "Distress / Auction", position: 6, color: "red" },
    { value: "NRI_SALE", label: "NRI Sale", position: 7, color: "yellow" },
    { value: "INHERITED", label: "Inherited / Probate", position: 8, color: "gray" },
  ],
});
