import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const NEGOTIATION_CLIENT_FIELD_ID = "dd34196c-08c1-44c7-b4a5-f116ea8530a8";

export default defineField({
  universalIdentifier: NEGOTIATION_CLIENT_FIELD_ID,
  objectUniversalIdentifier: "6d0c5641-26ec-4ee5-a46f-1ab5b21bef19",
  type: FieldType.RELATION,
  name: "client",
  label: "Client",
  relationTargetObjectMetadataUniversalIdentifier: "20202020-e674-48e5-a542-72570eee7213",
  relationTargetFieldMetadataUniversalIdentifier: "b1b40c64-b55e-4e2b-97e2-5f919c49038a",
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: "clientId",
  },
});
