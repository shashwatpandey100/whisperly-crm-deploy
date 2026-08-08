import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const PERSON_NEGOTIATIONS_FIELD_ID = "b1b40c64-b55e-4e2b-97e2-5f919c49038a";

export default defineField({
  universalIdentifier: PERSON_NEGOTIATIONS_FIELD_ID,
  objectUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  type: FieldType.RELATION,
  name: "negotiations",
  label: "Negotiations",
  relationTargetObjectMetadataUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  relationTargetFieldMetadataUniversalIdentifier: "dd34196c-08c1-44c7-b4a5-f116ea8530a8",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
