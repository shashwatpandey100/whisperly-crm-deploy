# Workflow fixes — three workflows have a silent filter bug

## Read this first

I have an API key with full read/write on objects, fields, and records, but workflow-builder
mutations are not reachable from my key — only whatever tool has actual workflow-builder access
(Twenty's own MCP server) can execute this. I verified all of the below directly against the
live workflow definitions and by running real test records through them — not by trusting the
stored config alone.

**Zero real damage so far** — both pre-existing broken workflows have 0 recorded runs, so this
is prevention, not cleanup. Fix before real data starts flowing through them.

## The root cause (applies to all three tasks below)

Any `FILTER` or `IF_ELSE` step's `stepFilters[].stepOutputKey` must be wrapped in Handlebars
braces — `"{{trigger.properties.after.fieldName}}"` — **not** the bare path
`"trigger.properties.after.fieldName"`. Twenty resolves it via
`packages/twenty-shared/src/utils/variable-resolver.ts` → `resolveString`, which only touches
strings matching `\{\{...\}\}`; anything else is returned completely unchanged. An unwrapped key
means the comparison runs against the literal path string forever, which can never equal a real
field value — so `is`/`isNot` always land on whichever side that implies, regardless of the
actual record.

Separately, for **SELECT-type fields specifically**, the comparison `value` must be a
JSON-array-encoded string — `'["REGISTERED"]"`, not the bare `"REGISTERED"` — matching the
`contains()` helper in `evaluate-filter-conditions.util.ts`, which `JSON.parse`s the value and
checks array membership. A bare string still "works" by accident sometimes (falls through to a
substring check) but isn't reliable and isn't what the one correctly-built filter in this
workspace already does. BOOLEAN fields don't need this — `"false"` as a bare string is fine.

**Proof, not theory:** I created a test Transaction with `transactionType = RENTAL` against the
live (buggy) "Token Received" workflow — it got all 18 sale-registration milestones, when it
should have gotten zero. I then found the one filter in this workspace that *is* built correctly
(`Add ToDo for new lead`'s trigger filter) and confirmed it uses both fixes above:
`"stepOutputKey": "{{trigger.properties.after.leadStatus}}"` and `"value": "[\"NEW\"]"`.

---

## Task 1 — fix "Token Received – Opens Deal Checklist"

- Workflow ID: `b1be86c8-da5e-4bd3-bc1b-0099b41fae81`
- Active version: `ede2c914-719e-4b56-a4fe-873b770380ea`

This version already has the right *structure* (filter, then 8 common milestones, then an
IF_ELSE branching into two independent tails — Twenty's IF_ELSE can't converge two branches back
onto shared steps, so each branch needs its own copy of steps 13–20, which this version already
does). Only the filter formatting needs fixing:

**Step `e1000001-0000-4000-8000-000000000001`** (Filter, right after trigger) — both
`stepFilters`:
- `stepOutputKey`: `"{{trigger.properties.after.transactionType}}"` (currently unbraced)
- values: `'["RENTAL"]"` and `'["COMMERCIAL_LEASE"]"` (currently bare `"RENTAL"` /
  `"COMMERCIAL_LEASE"`)

**Step `e1000001-0000-4000-8000-000000000010`** (IF_ELSE) — both `stepFilters` (in filter group
`fg1`, the `resale-branch` condition):
- `stepOutputKey`: `"{{trigger.properties.after.transactionType}}"` (currently unbraced)
- values: `'["PRIMARY"]"` and `'["UNDER_CONSTRUCTION"]"` (currently bare)

Everything else (milestone steps, branch wiring, `nextStepIds`) is already correct — don't touch
it.

### Verify

Create a test Transaction with `transactionType = RENTAL` — it should get **zero** milestones
(the filter should end the run). Create one with `transactionType = UNDER_CONSTRUCTION` — it
should get **16** milestones (no Society NOC / Bank NOC). Create one with `transactionType =
RESALE` — it should get all **18**. Delete all three test records after confirming, and delete
the milestones they generated (query by `transactionId`).

---

## Task 2 — fix "Post-Registration Handover"

- Workflow ID: `9ad85f15-44ee-4504-b327-9d183b35cc29`
- Active version: `1b829443-5ffb-49b1-b798-159d1ab6212b`
- Filter step: `c0700000-0000-4000-8000-000000000001`

Current filter: `stepOutputKey: "trigger.properties.after.stage"`, `value: "REGISTERED"`. Fix to:
- `stepOutputKey`: `"{{trigger.properties.after.stage}}"`
- `value`: `'["REGISTERED"]"`

### Verify

Update a test Transaction's stage to something other than `REGISTERED` (e.g. `TOKEN_RECEIVED`) —
the buyer update + mutation task should **not** fire. Update one to `REGISTERED` — it should
fire. Delete test records after.

---

## Task 3 — fix "Site Visit Feedback – Log Feedback Task"

- Workflow ID: `ed5bf466-ee34-4638-84a4-cec956d74a9e`
- Active version: `62206fa0-cfa3-4ed6-a966-d9a3b0252c46`
- Filter step: `c0400000-0000-4000-8000-000000000001`

Two `stepFilters`, both need the `stepOutputKey` brace fix; only the first (SELECT type) needs
the value-array fix:
- `enquiryStatus` filter: `stepOutputKey` → `"{{trigger.properties.after.enquiryStatus}}"`,
  `value` → `'["VISIT_DONE"]"` (currently bare `"VISIT_DONE"`)
- `feedbackSharedWithOwner` filter: `stepOutputKey` → `"{{trigger.properties.after.feedbackSharedWithOwner}}"`,
  `value` stays `"false"` (BOOLEAN, no array needed)

### Verify

Update a test Enquiry to `enquiryStatus = VISIT_DONE` with `feedbackSharedWithOwner = true` — no
task should fire. Update another to `VISIT_DONE` with `feedbackSharedWithOwner = false` — the
feedback task should fire. Delete test records after.

---

## When done

Re-fetch each fixed step and confirm the exact `stepOutputKey`/`value` strings above are in
place — don't assume the write succeeded from the response alone. Report which of the three were
fixed, and the result of each verification test.
