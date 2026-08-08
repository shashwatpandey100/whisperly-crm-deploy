/**
 * Sets the workspace display name and (optionally) logo for a client.
 *
 * This can't be done with an API key - `updateWorkspace` and `uploadWorkspaceLogo`
 * both require a real user login session (same constraint as setting the
 * default role - see README.md). This script logs in with your own admin
 * credentials instead, entirely locally - the password is never sent
 * anywhere but this workspace's own /graphql endpoint, and never appears in
 * chat history.
 *
 * Usage (run per client, with that client's own values):
 *   TWENTY_URL=http://localhost:3000 \
 *   WORKSPACE_ADMIN_EMAIL=you@example.com \
 *   WORKSPACE_ADMIN_PASSWORD=... \
 *   AGENCY_DISPLAY_NAME="TiwariPropMart" \
 *   AGENCY_LOGO_PATH=./tiwaripropmart-logo.png \
 *   npx tsx scripts/configure-workspace-branding.ts
 *
 * AGENCY_LOGO_PATH is optional - omit it to only set the display name.
 */

import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

const TWENTY_URL = process.env.TWENTY_URL;
const EMAIL = process.env.WORKSPACE_ADMIN_EMAIL;
const PASSWORD = process.env.WORKSPACE_ADMIN_PASSWORD;
const DISPLAY_NAME = process.env.AGENCY_DISPLAY_NAME;
const LOGO_PATH = process.env.AGENCY_LOGO_PATH;

if (!TWENTY_URL || !EMAIL || !PASSWORD || !DISPLAY_NAME) {
  console.error(
    'Set TWENTY_URL, WORKSPACE_ADMIN_EMAIL, WORKSPACE_ADMIN_PASSWORD, and AGENCY_DISPLAY_NAME before running this script.',
  );
  process.exit(1);
}

type GraphQLResponse<T> = { data?: T; errors?: { message: string }[] };

const graphql = async <T,>(
  query: string,
  variables: Record<string, unknown>,
  accessToken?: string,
): Promise<T> => {
  const response = await fetch(`${TWENTY_URL}/metadata`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    body: JSON.stringify({ query, variables }),
  });

  const body = (await response.json()) as GraphQLResponse<T>;

  if (body.errors) {
    throw new Error(JSON.stringify(body.errors));
  }

  return body.data as T;
};

const main = async () => {
  // Step 1: exchange email + password for a short-lived login token.
  const loginTokenResult = await graphql<{ getLoginTokenFromCredentials: { loginToken: { token: string } } }>(
    `mutation($email: String!, $password: String!, $origin: String!) {
      getLoginTokenFromCredentials(email: $email, password: $password, origin: $origin) {
        loginToken { token }
      }
    }`,
    { email: EMAIL, password: PASSWORD, origin: TWENTY_URL },
  );

  const loginToken = loginTokenResult.getLoginTokenFromCredentials.loginToken.token;

  // Step 2: exchange the login token for a real per-workspace access token.
  const authTokensResult = await graphql<{
    getAuthTokensFromLoginToken: { tokens: { accessOrWorkspaceAgnosticToken: { token: string } } };
  }>(
    `mutation($loginToken: String!, $origin: String!) {
      getAuthTokensFromLoginToken(loginToken: $loginToken, origin: $origin) {
        tokens { accessOrWorkspaceAgnosticToken { token } }
      }
    }`,
    { loginToken, origin: TWENTY_URL },
  );

  const accessToken =
    authTokensResult.getAuthTokensFromLoginToken.tokens.accessOrWorkspaceAgnosticToken.token;

  // Step 3: set the display name.
  await graphql(
    `mutation($data: UpdateWorkspaceInput!) {
      updateWorkspace(data: $data) { id displayName }
    }`,
    { data: { displayName: DISPLAY_NAME } },
    accessToken,
  );
  console.log(`Workspace display name set to "${DISPLAY_NAME}".`);

  // Step 4: upload the logo, if provided (multipart GraphQL upload spec).
  if (LOGO_PATH) {
    const fileBuffer = readFileSync(LOGO_PATH);
    const form = new FormData();
    form.append(
      'operations',
      JSON.stringify({
        query: `mutation($file: Upload!) { uploadWorkspaceLogo(file: $file) { id } }`,
        variables: { file: null },
      }),
    );
    form.append('map', JSON.stringify({ '0': ['variables.file'] }));
    form.append('0', new Blob([fileBuffer]), basename(LOGO_PATH));

    const response = await fetch(`${TWENTY_URL}/metadata`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}` },
      body: form,
    });
    const body = (await response.json()) as GraphQLResponse<unknown>;

    if (body.errors) {
      throw new Error(JSON.stringify(body.errors));
    }
    console.log(`Logo uploaded from ${LOGO_PATH}.`);
  } else {
    console.log('No AGENCY_LOGO_PATH set - skipped logo upload.');
  }

  console.log('Done.');
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
