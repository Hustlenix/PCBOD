# PCBOD — Implementation Rules

These rules govern all human and AI implementation work.

## Authority

Priority order:

1. `PRD.md` defines product behavior.
2. `Architecture.md` defines technical architecture.
3. `design.md` defines visual/interaction behavior.
4. `rules.md` defines implementation constraints.
5. `phases.md` defines execution order.
6. `memory.md` summarizes current durable context.

If documents conflict, do not guess. Resolve the conflict by aligning all affected documents before implementation.

## Product rules

- The product MUST be called **PCBOD** unless explicitly renamed later.
- PCBOD MUST be presented as a PCB creator marketplace + fulfillment platform, not as an owned PCB factory unless PCBOD actually owns/operates one.
- The MVP MUST use partner manufacturing or admin-managed fulfillment.
- The marketplace MUST support creators, buyers, and admins.
- Every paid order MUST be bound to an immutable approved product revision.
- Protected manufacturing files MUST NOT be exposed to buyers.
- Creator earnings MUST be tracked through a royalty ledger.
- The UI MUST distinguish gross sales from creator royalties.
- The platform MUST NOT display fake sales, ratings, order counts, creator earnings, manufacturing partners, customer logos, or reviews.
- Features not implemented MUST NOT be represented as working.
- Automated DFM MUST NOT be claimed unless a real validated DFM system exists.
- PCBOD MUST NOT imply electrical certification or product safety certification that has not occurred.

## Stack rules

- MUST use Next.js App Router with TypeScript strict mode.
- MUST use Postgres/Supabase as the source of truth.
- MUST use SQL migrations committed to source control.
- MUST use Supabase Storage or an equivalent private object store for protected manufacturing files.
- MUST keep payment provider logic behind an adapter.
- MUST keep transactional email behind an adapter.
- MUST NOT introduce microservices for the MVP.
- MUST NOT introduce a global client state library without a documented concrete need.
- MUST NOT use a second database for ordinary MVP features.
- MUST NOT hard-code provider-specific payment objects into order/royalty domain models.

## Repository rules

- Domain code MUST live under a clear feature/module boundary.
- Shared presentational primitives belong in `components/ui`.
- Business-critical mutation logic MUST NOT live inside UI components.
- Server-only modules MUST be clearly marked/structured so they cannot enter the client bundle.
- Provider SDK imports MUST remain in provider adapter modules.
- Database queries MUST be centralized through typed query/repository modules.
- Do not create duplicate utilities for money, authorization, status transitions, or file access.
- Delete dead scaffold code rather than leaving confusing alternate implementations.

## Naming conventions

- React components: `PascalCase`.
- Functions/variables: `camelCase`.
- Constants: `UPPER_SNAKE_CASE` only for true constants.
- Database tables/columns: `snake_case`.
- Routes: lowercase readable slugs.
- IDs: UUIDs unless a clear technical reason requires otherwise.
- Money fields: suffix with `_minor` when integer minor units.
- Timestamps: suffix with `_at`.
- Boolean fields: positive names such as `active`, `verified`, `protected`.
- Avoid ambiguous terms such as `item`, `data`, or `thing` in domain models when a precise name exists.

## TypeScript rules

- `strict` MUST remain enabled.
- Production code MUST NOT use unbounded `any`.
- External inputs MUST be parsed with Zod or an equivalent runtime schema.
- Database enum-like values MUST be represented by constrained types.
- Exhaustive switches SHOULD use `never` checks.
- Monetary arithmetic MUST use integers, never floating point.
- Do not suppress TypeScript errors without a documented reason.

## Authentication rules

- Authentication MUST be enforced server-side.
- Authorization MUST be enforced server-side.
- Hiding a button is NOT authorization.
- Admin actions MUST call `requireAdmin()` or equivalent.
- Creator product mutations MUST verify ownership.
- Service-role credentials MUST never be available to the browser.
- Buyer addresses MUST never be sent to creators.
- Protected manufacturing files MUST never be placed in public buckets.

## Database rules

- Every schema change MUST be a migration.
- No manual production schema changes.
- Foreign keys MUST be used for core relational integrity.
- Index common filters/joins used by marketplace, orders, and creator dashboards.
- Orders MUST snapshot commercial terms at purchase.
- Approved revisions MUST be immutable at the service/database-policy layer.
- Royalty accounting MUST be append-oriented.
- Admin adjustments MUST preserve history rather than overwrite prior entries.
- Payment webhook event IDs MUST be unique for idempotency.
- Destructive migrations require explicit review.

## Payment rules

- Checkout price MUST be recomputed on the server.
- Browser-provided totals MUST NOT be trusted.
- Payment webhook signatures MUST be verified.
- Webhook handling MUST be idempotent.
- A successful provider webhook MUST NOT create duplicate paid orders.
- Do not store complete card numbers, CVV, or equivalent restricted payment data.
- Order state and provider state MUST be reconcilable.
- Refund handling MUST update royalty accounting.

## Money rules

- Use integer minor units for all money.
- Store currency with every financial record.
- Do not add values of different currencies.
- Historical order values MUST NOT change when current listing prices change.
- Creator balances shown in UI MUST be derived from ledger data or a safely maintained projection backed by ledger entries.
- Pending royalty MUST NOT be described as paid/withdrawable.

## Product/revision rules

- A product MAY have many revisions.
- Only approved revisions may become sellable.
- A paid order MUST reference the exact revision purchased.
- Approved revision production files MUST NOT be edited in place.
- Any manufacturing change creates a new revision.
- Product archive/suspension MUST NOT delete historic order/revision data.
- Revision hashes/checksums SHOULD be recorded on approval.
- Protected/open distribution mode MUST be explicit.

## File upload rules

- Uploads MUST validate:
  - authentication;
  - authorization;
  - max size;
  - allowed extension;
  - MIME where meaningful;
  - filename normalization;
  - archive integrity when applicable.
- Storage object keys MUST be generated by the server/system, not trusted user paths.
- Ignore or reject path traversal filenames.
- File metadata and checksum MUST be recorded.
- Protected manufacturing files MUST use private storage.
- Signed URLs MUST be short-lived.
- A signed URL MUST only be generated after authorization.
- Do not log signed URLs or secret storage tokens.
- Production should have a malware/file-scanning integration point even if the first pilot uses a simpler controlled upload process.

## API rules

- All mutation inputs MUST be runtime validated.
- APIs MUST return stable, typed error codes for recoverable user-facing states.
- Do not expose raw database errors to the client.
- Error messages MUST not reveal secrets, stack traces, RLS details, or private file paths.
- Rate-limit abuse-prone public endpoints.
- External webhooks MUST verify authenticity.
- API handlers SHOULD call domain services rather than duplicate business logic.

## Order state rules

- Order transitions MUST be represented by a state machine/transition map.
- Invalid transitions MUST fail server-side.
- Every material state change MUST create history/audit data.
- `delivered` MUST NOT be reachable from arbitrary states.
- Refund states MUST remain distinguishable from manufacturing failure.
- Email/notification failure MUST NOT roll back legitimate order state.

## Royalty rules

- Royalty calculation MUST be deterministic and unit-tested.
- Royalty terms MUST be snapshotted at checkout.
- Refunds MUST reverse or adjust affected royalty entries.
- Manual adjustments MUST include actor, reason, amount, and timestamp.
- Payout requests MUST be checked against eligible balance.
- Payout execution MUST be auditable.
- Do not represent manual payouts as automatic payouts.

## Review rules

- Only eligible verified buyers may review.
- One review per eligible order line unless the product rules explicitly allow editing the existing review.
- Aggregate ratings MUST use real published reviews.
- Moderation actions MUST be auditable.
- Do not generate synthetic customer reviews for production.

## UI/component rules

- Use repository-owned accessible components.
- Components MUST have defined states: default, hover, focus, disabled, loading, error where applicable.
- Do not create bespoke button/input styling on every page.
- Product cards MUST show consistent hierarchy and pricing.
- Dense admin tables may use desktop-oriented layouts but MUST remain usable on narrow screens through controlled horizontal scrolling or responsive alternatives.
- Primary buyer actions MUST remain obvious without sticky-overlay abuse.

## Responsive rules

- Mobile-first behavior is mandatory.
- All public pages MUST be usable at 320 CSS px width.
- Creator Studio and Admin MUST support tablet/mobile for review/status tasks, even if large data tables are best on desktop.
- Do not hide critical actions solely because the viewport is small.
- Touch targets SHOULD meet 44×44 CSS px guidance where practical.

## Accessibility rules

- Target WCAG 2.2 AA.
- Every interactive control MUST be keyboard accessible.
- Focus indicators MUST be visible.
- Icon-only actions MUST have accessible names.
- Form errors MUST be associated with their fields.
- Color MUST NOT be the only state indicator.
- Dialogs MUST trap/restore focus correctly.
- Animations MUST respect `prefers-reduced-motion`.
- Product imagery MUST support meaningful alt text.
- Status chips MUST include readable text.

## Design-system rules

- Follow `design.md`.
- Avoid generic AI landing-page aesthetics:
  - no excessive glassmorphism;
  - no random neon gradient blobs;
  - no giant empty hero with meaningless copy;
  - no excessive rounded cards for every section;
  - no fake 3D PCB renders presented as real products;
  - no meaningless animated particles.
- Use the PCB grid/traces motif sparingly and structurally.
- The design MUST prioritize trustworthy technical commerce over visual gimmicks.
- Product photography/renders MUST be clearly attributable to real uploaded product media.
- Empty states must be honest.

## Content rules

- Use concise technical language.
- Explain manufacturing terms when a buyer may not know them.
- Never claim:
  - certified;
  - tested;
  - verified;
  - made in a specific country;
  - shipped in a specific time;
  - compatible with a device;
  unless supported by product/operations data.
- Clearly distinguish:
  - bare PCB;
  - assembled PCB;
  - kit.
- Product listing MUST state what is and is not included.

## Error-state rules

- Every networked mutation MUST have a user-visible pending state.
- Failed mutations MUST provide recovery guidance.
- Checkout errors MUST preserve the buyer's cart where safe.
- File upload errors MUST show which file failed.
- Admin failures MUST not silently drop operational updates.
- Avoid generic `Something went wrong` when a specific safe error is available.

## Loading-state rules

- Use skeletons only where content layout is predictable.
- Do not fake progress percentages.
- Long file uploads SHOULD show actual upload progress where available.
- Payment processing UI MUST make clear that confirmation may occur asynchronously.

## Security rules

- Never commit API keys, tokens, passwords, service-role keys, or real webhook secrets.
- `.env.example` contains placeholders only.
- Sanitize creator rich text and user reviews.
- Use parameterized queries/typed client.
- Apply CSRF-safe framework patterns.
- Add basic abuse/rate protection.
- Admin accounts SHOULD use MFA where supported.
- Least privilege for all provider keys.
- Security headers MUST be configured.
- Dependencies MUST be audited regularly.
- Do not expose internal manufacturer pricing to public/creator clients unless intentionally part of the commercial model.

## Logging rules

- Logs MUST NOT contain:
  - payment secrets;
  - auth tokens;
  - raw private manufacturing files;
  - signed URLs;
  - full shipping addresses unless an explicit secure operational log requires it;
  - service keys.
- Use structured logs with request/order identifiers where safe.
- Important provider failures MUST include enough metadata to debug without exposing secrets.

## Testing rules

Before merge/deploy, critical domain tests MUST pass.

Minimum unit coverage includes:

- money utilities;
- royalty calculations;
- order state transitions;
- permissions;
- revision immutability;
- checkout snapshot logic.

Minimum integration coverage includes:

- creator submission;
- admin approval;
- protected file denial;
- payment webhook idempotency;
- refund/royalty reversal;
- verified review eligibility.

Minimum E2E smoke coverage includes:

- publish flow;
- purchase flow;
- fulfillment flow.

No critical flow may be marked complete based only on static UI.

## Performance rules

- Public catalog/product pages SHOULD render server-first.
- Avoid client JavaScript for static product content.
- Images MUST be resized/optimized.
- Avoid loading hidden dashboard data unnecessarily.
- Add database indexes before compensating with client caching.
- Do not fetch protected file metadata for public pages.
- N+1 query patterns MUST be removed in marketplace/dashboard views.

## SEO rules

Public pages MUST support:

- descriptive title/meta description;
- canonical URL;
- Open Graph metadata;
- sitemap;
- robots controls;
- structured product metadata only when accurate and compliant;
- stable human-readable product slugs.

Private account, creator draft, checkout, order, and admin pages MUST NOT be indexed.

## Analytics rules

- Track only defined product events.
- Do not send private manufacturing data, addresses, payment secrets, or sensitive order contents to analytics.
- Event names and payloads MUST be centralized.
- Fake analytics/sample events MUST not pollute production.

## Git rules

- Never commit secrets.
- Keep commits scoped and descriptive.
- Database migrations MUST be committed with the feature requiring them.
- Do not force-push shared protected branches.
- CI MUST pass before production deployment.
- Lockfile MUST be committed.
- Temporary debug code and console spam MUST be removed before merge.

## Deployment rules

- Production deployment MUST use environment-managed secrets.
- Preview/test deployments MUST use non-production provider credentials.
- Production payment webhooks MUST point to the production endpoint.
- Migrations MUST be applied in a controlled deploy step.
- Rollback/recovery procedure MUST be documented before accepting real orders.
- Seed/demo data MUST NOT be inserted into production as if real.
- Production admin user creation MUST follow a controlled bootstrap path.

## No-fake-production rule

MUST NOT ship fake behavior in a production path.

Examples of forbidden behavior:

- checkout button that only displays a success toast;
- fake order numbers;
- fake payment completion;
- fake royalty balance;
- fake shipping tracking;
- fake DFM success;
- fake manufacturer quotes;
- fake reviews;
- generated "live" sales notifications;
- hard-coded dashboard metrics presented as real.

Use clearly labeled demo mode only in non-production environments.

## Preserve-working-behavior rule

When modifying existing code:

- run relevant tests first;
- identify current behavior;
- change the smallest coherent surface;
- preserve public APIs unless migration is deliberate;
- add regression tests for fixed bugs;
- do not rewrite unrelated modules for style preference.

## Definition of done

A task is done only when:

1. implementation matches the six project documents;
2. types pass;
3. lint passes;
4. relevant unit/integration/E2E tests pass;
5. loading/error/empty states exist;
6. permissions are enforced server-side;
7. responsive behavior is checked;
8. accessibility is checked;
9. no secrets or fake production data are introduced;
10. migration/configuration changes are documented;
11. feature works in a production-like environment, not only as static UI.
