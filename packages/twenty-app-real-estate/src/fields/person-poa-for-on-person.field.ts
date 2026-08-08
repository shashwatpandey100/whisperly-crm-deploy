import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_POA_FOR_FIELD_ID = "789501e2-1dad-43b6-b1f1-b748801e9a90";

export default defineField({
  universalIdentifier: PERSON_POA_FOR_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "poaFor",
  label: "POA For",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "0170e7f4-771c-4255-a125-a6ecf59091a3",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
