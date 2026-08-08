import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_SUB_REGISTRAR_OFFICE_FIELD_ID = "c0118085-c6a9-4b05-b2bb-43daa0ed0852";

export default defineField({
  universalIdentifier: OPPORTUNITY_SUB_REGISTRAR_OFFICE_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.TEXT,
  name: "subRegistrarOffice",
  label: "Sub-Registrar Office",
  icon: "IconBuildingBank",
  isNullable: true,
});
