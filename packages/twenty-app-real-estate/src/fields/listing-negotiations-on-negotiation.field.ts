import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export const LISTING_NEGOTIATIONS_FIELD_ID = "943df16c-adaa-4021-9cd7-458e3270d0fa";

export default defineField({
  universalIdentifier: LISTING_NEGOTIATIONS_FIELD_ID,
  objectUniversalIdentifier: "cbf01108-4045-4042-a5ce-069f0ec5f065",
  type: FieldType.RELATION,
  name: "negotiations",
  label: "Negotiations",
  relationTargetObjectMetadataUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  relationTargetFieldMetadataUniversalIdentifier: "f97341a3-1d6c-42d1-bd2b-09c26997a3db",
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
