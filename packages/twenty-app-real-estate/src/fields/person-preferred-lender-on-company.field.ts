import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const PERSON_PREFERRED_LENDER_FIELD_ID = "6e04fed2-a27c-4fc5-ae7c-fe9d99e074a2";

export default defineField({
  universalIdentifier: PERSON_PREFERRED_LENDER_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "preferredLender",
  label: "Preferred Lender",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-b374-4779-a561-80086cb2e17f",
  relationTargetFieldMetadataUniversalIdentifier: "4b994169-22bb-41ca-9bc5-cb42b2130bb4",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "preferredLenderId",
  },
});
