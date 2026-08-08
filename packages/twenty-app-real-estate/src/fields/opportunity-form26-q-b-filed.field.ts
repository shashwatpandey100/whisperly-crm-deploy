import { defineField, FieldType } from 'twenty-sdk/define';

export const OPPORTUNITY_FORM26_QBFILED_FIELD_ID = "b36b3ce9-24ca-453c-b04c-b848bc7e380d";

export default defineField({
  universalIdentifier: OPPORTUNITY_FORM26_QBFILED_FIELD_ID,
  objectUniversalIdentifier: "20202020-9549-49dd-b2b2-883999db8938",
  type: FieldType.BOOLEAN,
  name: "form26QBFiled",
  label: "Form 26QB Filed",
  description: "Statutory filing. Easy to forget, and penalised.",
  icon: "IconFileCheck",
  isNullable: true,
});
