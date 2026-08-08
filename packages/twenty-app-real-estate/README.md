# India Real Estate CRM — application package

This is the real-estate data model, roles, and permissions for the CRM template, packaged as a
Twenty [Application Manifest](https://docs.twenty.com/developers/extend/apps/getting-started/quick-start.md).
It installs 8 custom objects (Property, Listing, Enquiry, Negotiation, Milestone, Document,
Tenancy, Project), extends 6 standard objects (Person, Company, Opportunity, Task, Note,
Dashboard) with real-estate fields, and creates two roles (Agency Admin, Agent) with the
permissions and sidebar structure already built and verified this session.

**Not covered by this package** — both need the manual steps below, per client, every time:
- **Workflows.** Twenty's manifest has no workflow entity. Build them from
  `_docs/automations.md` via Twenty's workflow builder (UI or its MCP-tool).
- **Row-level scoping.** Twenty's manifest accepts `rowLevelPermissionPredicates` on a role but
  doesn't actually apply them (confirmed both by Twenty's own internal SDK apps working around
  it, and by testing it directly against a fresh instance). Run
  `scripts/configure-agent-row-level-scope.ts` after installing instead.

## Setting up a new client

1. Clone this repo for the client (their own VM, own repo, own database — never share a
   deployment across clients).
2. `bash packages/twenty-utils/setup-dev-env.sh` — starts Postgres/Redis, creates the database,
   runs migrations.
3. Sign up the client's workspace through the normal Twenty UI (`http://localhost:3000`).
4. Generate an API key for that workspace (Settings → APIs & Webhooks).
5. From this package: `yarn install`, then
   `yarn twenty remote:add --url http://localhost:3000 --api-key <key> --as <client-name>`.
6. `yarn twenty plan` — review the diff (should show ~600 creates, 0 changes, 0 destroys on a
   fresh workspace). `yarn twenty apply` to install.
7. **Row-level scoping** (only if this client's deployment has a real Twenty Enterprise
   subscription — this feature is Enterprise-only, see the licensing note below):
   `TWENTY_URL=http://localhost:3000 TWENTY_API_KEY=<key> npx tsx scripts/configure-agent-row-level-scope.ts`
8. **Default role for new invites** — one manual click, not scriptable (the mutation requires a
   real login session, API keys are rejected): Settings → General → scroll to the "Default role"
   section → set it to **Agent**. Without this, new invitees default to Twenty's built-in
   "Member" role, which has no restrictions at all.
9. **Workspace name and logo** — also requires a real login session, not an API key (same
   constraint as above). Run
   `TWENTY_URL=http://localhost:3000 WORKSPACE_ADMIN_EMAIL=... WORKSPACE_ADMIN_PASSWORD=... AGENCY_DISPLAY_NAME="Client Name" AGENCY_LOGO_PATH=./logo.png npx tsx scripts/configure-workspace-branding.ts`
   (logs in with the given credentials locally, never sends them anywhere but this workspace's
   own `/graphql`; `AGENCY_LOGO_PATH` is optional).
10. **Workflows** — hand `_docs/automations.md` to whichever tool has workflow-builder write
    access (Twenty's own MCP server, not a plain API key) to build "Token Received – Opens Deal
    Checklist". Repeat for any other workflows the client needs.
11. Set `NODE_ENV=production` in that client's `.env` (or leave it unset — `docker-compose.yml`
    already defaults to `production`). **Do not** copy over `ENTERPRISE_VALIDITY_TOKEN` from a
    dev `.env` — that token only works in `development`/`test` mode and is licensed for
    dev/testing use only, not production, unless this specific client has purchased a real
    Twenty Enterprise subscription (see below).

## Row-level scoping and Enterprise licensing

Real per-agent record isolation (an Agent only sees records they're assigned to) is a genuine
Twenty Enterprise feature, gated behind a paid subscription in production. For **development and
testing only**, Twenty ships a dev license token in its own source
(`packages/twenty-server/src/engine/core-modules/enterprise/constants/enterprise-public-key.constant.ts`)
that unlocks it when `NODE_ENV=development` — that's what this session's dev workspace used to
verify the mechanism works. For a real client in production, either:
- skip row-level scoping (agents see the whole agency's pipeline — the default, no extra cost), or
- have that client purchase a real Twenty Enterprise subscription and use their own signed
  `ENTERPRISE_KEY`.

## Regenerating this package from a live workspace

If the data model changes and this package needs to be regenerated from a running workspace's
current state (rather than hand-edited), the generator scripts used to build it the first time
are not part of this package (they were throwaway, one-off tools). The process: dump every
object/field's `universalIdentifier` and relation info via the metadata API, exclude
system-added and platform-native fields, emit one `.object.ts`/`.field.ts` file per entity
following the conventions already in `src/`, then validate with `yarn twenty dev:build` and
`yarn twenty plan` against a disposable test instance (`yarn twenty docker:start`) before
touching a real workspace.
