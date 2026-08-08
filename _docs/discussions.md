# Project Brief: Twenty CRM → Real Estate CRM (White-Label Build)

## 1. Goal

Build a self-hosted, real-estate-specific CRM on top of [Twenty](https://github.com/twentyhq/twenty) (open source), branded for a real estate agency client, deployed on infrastructure the client owns/controls. This document is a starting brief — hand it to Claude Code to scaffold the local setup and begin implementation.

---

## 2. Licensing (read this before writing any code)

- Twenty is licensed under **AGPL-3.0**, with some Enterprise-tier features carved out under a separate commercial license (SSO, row-level permissions, priority support — gated behind their paid Organization plan).
- **Business model that keeps this clean:** the client owns the codebase, the database, and the infrastructure. I act as a paid developer/consultant setting it up and maintaining it — I am not operating a multi-tenant SaaS across many clients on my own infrastructure.
- Practically: the client gets the *full* corresponding source code (including any customizations), not a partial handoff. As long as they possess and control the complete source, AGPL's source-availability obligation is satisfied by them owning it.
- Avoid: retaining exclusive admin/deploy access "for convenience" in a way that makes me the de facto operator while claiming it's "their infra" — if I'm the one actually running it and they can't get the source independently, the AGPL analysis reverts to the SaaS-operator case.
- If a future version of this product exposes a public-facing portal (e.g., leads/customers interacting directly, not just internal agency staff), revisit the licensing picture — that may count as "the public" interacting with the modified software.
- Not legal advice — a one-time contract/license review by an actual IP attorney is worth it once this is running at volume.

---

## 3. What Twenty gives out of the box

| Feature | What it does | Real estate example |
|---|---|---|
| Contacts (People) | Record per individual, with full interaction history | Buyer/seller profile: name, contact info, budget, notes |
| Companies | Record per organization | Mortgage brokers, inspection companies, partner agencies |
| Deals / Pipeline | Kanban board of deals moving through stages | New Lead → Showing → Offer → Under Contract → Closed |
| Custom Objects & Fields | Create your own record types, 20+ field types, no code | "Property Listing" object: address, price, MLS #, status |
| Multiple Views | Table, kanban, calendar views of the same data | Table of all listings, calendar of scheduled showings |
| Filtering/Sorting/Saved Views | Save reusable filtered views | "My active leads only," "Listings over $500K" |
| Workflow Automation | No-code rules: trigger on record change, schedule, or webhook | Auto-assign new leads to least-busy agent + send welcome email |
| Email & Calendar Sync | Connect Google Workspace / Microsoft 365 | Emails to a buyer auto-log onto their CRM record |
| Tasks & Notes | To-dos and free text tied to any record | "Follow up Friday," "Seller wants no AM showings" |
| Role-Based Permissions | Control who sees/edits what | Junior agents see only their own leads |
| REST + GraphQL API | Programmatic access for integrations | Used to build MLS sync |
| MCP / AI integration | AI assistants can read/write CRM via plain language | "Show me leads not contacted in 5 days" |
| Self-hosted | Full data ownership, no vendor lock-in | Agency never loses data if they switch providers |

**What Twenty does NOT include out of the box (real work required):**
- Real-estate-specific data model (Listings, Showings, Offers) — needs custom objects configured
- MLS/IDX integration — needs custom API integration work; MLS feeds vary by board (RETS vs. RESO Web API) and typically take iteration, not a single pass
- Marketing/email campaign tools (drip sequences) — Twenty has none; would need a bolt-on tool (e.g., Listmonk) if the client wants this
- Advanced multi-branch workflow automation — the built-in engine handles simple rules well, complex logic likely needs custom code
- Compliance certifications (SOC 2, HIPAA) — not present; irrelevant for most agencies but note if it comes up
- Production hardening — backups, SSL, monitoring, reverse proxy, resource sizing — needs to be set up and *verified*, not just configured

---

## 4. Scope for this build (fill in per client)

- [ ] Client name / team size:
- [ ] Custom objects needed: Property Listing, Showing, Offer (adjust as needed)
- [ ] Fields needed per object:
- [ ] MLS/IDX integration required? (Y/N, which board/feed)
- [ ] Branding: logo, colors, name shown in UI
- [ ] Email/calendar sync: Google Workspace or Microsoft 365?
- [ ] Automation rules needed (lead assignment, follow-up reminders, etc.):
- [ ] Number of user roles / permission levels needed:
- [ ] Hosting target: client's own VPS / cloud account (specify provider)

---

## 5. Technical setup plan

1. Deploy via Docker Compose (official Twenty self-hosting docs / `twenty-docker` repo) on client-owned infrastructure.
2. Use a recent, production-marked release (v2.1.0+ was the first release marked production-ready for single-tenant self-hosted deployments — confirm latest stable version before deploying).
3. Configure `.env`: database credentials, `SERVER_URL`, SMTP settings for email, access token secrets.
4. Set up reverse proxy (Nginx or similar) with HTTPS/SSL (Let's Encrypt).
5. Configure object storage (S3-compatible, e.g., MinIO) for file uploads/attachments.
6. Build custom objects/fields per Section 4 scope, via Settings UI (no migration needed).
7. Set up workflow automations for the agreed rules.
8. Connect Google Workspace / Microsoft 365 for email/calendar sync.
9. Apply branding (logo, color theme, naming) via frontend config/theming.
10. Set up backups (verify they actually restore, not just that they run).
11. Hand over full source + deployment docs to client; confirm they can independently access/redeploy.
12. Draft client-facing "Source" note/link per AGPL best practice (even though client owns the deployment, keep this documented for their own compliance).

---

## 6. Business model context (for reference, not implementation)

- Structure: setup fee + monthly maintenance retainer, scoped as consulting/dev-for-hire (client owns codebase/infra), not multi-tenant SaaS.
- Price relative to market alternatives the client is currently paying (not relative to own hosting cost): real estate CRMs commonly range $69–$1,500+/month depending on platform and team size, with $1,000–$5,000 one-time setup fees at competitors — price the offering as a meaningfully cheaper, no-lock-in, fully-owned alternative, not as a bargain-bin option.
- Target: agencies of ~10–50 agents currently on spreadsheets or an unsatisfying/locked-in existing CRM, not brokerages already deep into multi-year contracts with kvCORE/BoomTown.
- Reusable "starter kit" (Listings/Showings/Offers custom objects + branding template + basic MLS webhook template) should be built once and reused per client to keep delivery time low without cutting corners on quality.

---

## 7. Next steps for Claude Code (local)

- Clone Twenty repo, stand up local dev/self-hosted instance via Docker Compose.
- Scaffold the custom objects from Section 4.
- Prototype one workflow automation end-to-end.
- Note any gaps encountered vs. this brief for follow-up.