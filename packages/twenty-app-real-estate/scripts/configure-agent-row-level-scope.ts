/**
 * Configures row-level record scoping for the "Agent" role, so an Agent only
 * sees/edits records they're personally tied to on the objects listed below.
 *
 * This can't be done via the application manifest - Twenty's manifest type
 * accepts rowLevelPermissionPredicates but the sync pipeline doesn't apply
 * them (confirmed both by Twenty's own internal SDK apps working around it
 * with a script like this one, and by testing it directly: it fails
 * typecheck/validation rather than being silently accepted). This uses the
 * same GraphQL mutation Twenty's own settings UI uses instead.
 *
 * Requires Twenty's real Enterprise row-level-permissions feature to be
 * licensed on the target workspace (see the per-client runbook in README.md)
 * - without it, this mutation throws "Row level permission predicate feature
 * is disabled" and nothing is written.
 *
 * Usage:
 *   TWENTY_URL=http://localhost:3000 TWENTY_API_KEY=... npx tsx scripts/configure-agent-row-level-scope.ts
 */

const TWENTY_URL = process.env.TWENTY_URL;
const TWENTY_API_KEY = process.env.TWENTY_API_KEY;

if (!TWENTY_URL || !TWENTY_API_KEY) {
  console.error('Set TWENTY_URL and TWENTY_API_KEY before running this script.');
  process.exit(1);
}

const AGENT_ROLE_LABEL = 'Agent';

// Object nameSingular -> the relation field(s) that count as "this agent owns
// this record". Multiple fields are OR'd together (e.g. a Listing is visible
// to either its assigned agent or its co-agent).
const OWNERSHIP_FIELDS_BY_OBJECT: Record<string, string[]> = {
  person: ['assignedAgent'],
  listing: ['assignedAgent', 'coAgent'],
  enquiry: ['agent'],
  negotiation: ['agent', 'counterpartyAgent'],
  opportunity: ['owner', 'counterpartyAgent'],
  milestone: ['assignedTo'],
  task: ['assignee'],
};

type GraphQLResponse<T> = { data?: T; errors?: { message: string }[] };

const graphql = async <T,>(
  query: string,
  variables: Record<string, unknown>,
  endpoint: 'metadata' | 'graphql' = 'metadata',
): Promise<T> => {
  const response = await fetch(`${TWENTY_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TWENTY_API_KEY}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const body = (await response.json()) as GraphQLResponse<T>;

  if (body.errors) {
    throw new Error(JSON.stringify(body.errors));
  }

  return body.data as T;
};

type ObjectField = { id: string; name: string };
type ObjectNode = {
  id: string;
  nameSingular: string;
  fields: { edges: { node: ObjectField }[] };
};

const main = async () => {
  const objectsNeeded = new Set([...Object.keys(OWNERSHIP_FIELDS_BY_OBJECT), 'workspaceMember']);

  const objectsResult = await graphql<{
    objects: { edges: { node: ObjectNode }[] };
  }>(
    `query { objects(paging: { first: 200 }) { edges { node {
      id nameSingular fields(paging: { first: 200 }) { edges { node { id name } } }
    } } } }`,
    {},
  );

  const objectsByName = new Map(
    objectsResult.objects.edges
      .map((e) => e.node)
      .filter((n) => objectsNeeded.has(n.nameSingular))
      .map((n) => [n.nameSingular, n]),
  );

  const workspaceMemberIdField = objectsByName
    .get('workspaceMember')
    ?.fields.edges.find((e) => e.node.name === 'id')?.node;

  if (!workspaceMemberIdField) {
    throw new Error('Could not find workspaceMember.id field.');
  }

  const rolesResult = await graphql<{ getRoles: { id: string; label: string }[] }>(
    `query { getRoles { id label } }`,
    {},
  );
  const agentRole = rolesResult.getRoles.find((r) => r.label === AGENT_ROLE_LABEL);

  if (!agentRole) {
    throw new Error(`No role named "${AGENT_ROLE_LABEL}" found on this workspace.`);
  }

  for (const [objectName, fieldNames] of Object.entries(OWNERSHIP_FIELDS_BY_OBJECT)) {
    const object = objectsByName.get(objectName);

    if (!object) {
      console.warn(`Skipping ${objectName}: object not found on this workspace.`);
      continue;
    }

    const fields = fieldNames
      .map((name) => object.fields.edges.find((e) => e.node.name === name)?.node)
      .filter((f): f is ObjectField => f !== undefined);

    if (fields.length !== fieldNames.length) {
      console.warn(
        `Skipping ${objectName}: expected fields [${fieldNames.join(', ')}], found [${fields
          .map((f) => f.name)
          .join(', ')}].`,
      );
      continue;
    }

    const groupId = fields.length > 1 ? crypto.randomUUID() : undefined;

    const predicates = fields.map((field) => ({
      fieldMetadataId: field.id,
      operand: 'IS',
      workspaceMemberFieldMetadataId: workspaceMemberIdField.id,
      ...(groupId ? { rowLevelPermissionPredicateGroupId: groupId } : {}),
    }));

    const predicateGroups = groupId
      ? [{ id: groupId, objectMetadataId: object.id, logicalOperator: 'OR' }]
      : [];

    await graphql(
      `mutation($input: UpsertRowLevelPermissionPredicatesInput!) {
        upsertRowLevelPermissionPredicates(input: $input) {
          predicates { id }
          predicateGroups { id }
        }
      }`,
      {
        input: {
          roleId: agentRole.id,
          objectMetadataId: object.id,
          predicates,
          predicateGroups,
        },
      },
    );

    console.log(`${objectName}: scoped by [${fieldNames.join(', ')}]`);
  }

  console.log('Done.');
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
