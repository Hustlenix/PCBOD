# PCBOD — Architecture

## Architecture overview

PCBOD is a web marketplace with four major domains:

1. **Marketplace** — public catalog, product discovery, product details, creator profiles.
2. **Commerce** — cart, checkout, payment confirmation, orders, refunds, shipping metadata.
3. **Creator publishing** — products, immutable revisions, protected manufacturing files, buyer files, submissions, royalties.
4. **Operations** — moderation, pricing, manufacturing routing, QC, fulfillment, payouts, audit.

The MVP uses a modular monolith rather than microservices. This minimizes operational complexity while keeping domain boundaries explicit enough to extract later if scale demands it.

## Chosen stack

### Application

- **Next.js** using the current stable App Router release at implementation time.
- **TypeScript** with strict mode.
- **React** as provided by the chosen Next.js release.
- **Tailwind CSS** for utility styling.
- **shadcn/ui primitives or equivalent accessible headless primitives** for dialogs, menus, forms, and overlays; generated components become repository-owned code and must be adapted to the PCBOD design system.
- **Zod** for runtime input validation.
- **React Hook Form** for complex client forms where it reduces boilerplate.

### Backend/data

- **Supabase Postgres** as the primary relational database.
- **Supabase Auth** for account/session management.
- **Supabase Storage** for public media and private protected production files.
- **Row Level Security (RLS)** as defense in depth, backed by explicit server authorization.
- **SQL migrations** committed to the repository.

### Payments

Use a `PaymentProvider` adapter.

Initial deployment may implement one supported provider appropriate for the target launch market. Provider-specific SDK code MUST remain behind the adapter.

The system must support:

- checkout/session creation;
- verified webhook ingestion;
- payment status reconciliation;
- refund initiation/reference where provider capabilities allow.

Do not couple order/royalty logic to provider-specific object shapes.

### Email

Use a transactional email provider behind an `EmailProvider` adapter.

### Analytics

Use a privacy-conscious analytics adapter. Events must be centralized through one internal analytics module.

### Deployment

- Web application: **Vercel** or another compatible Node/Next.js host.
- Database/Auth/Storage: **Supabase**.
- DNS/domain: provider-neutral.
- CI: **GitHub Actions**.
- Error monitoring: **Sentry** or equivalent via an internal observability adapter.

## Why this architecture

- A marketplace MVP does not justify microservices.
- Postgres fits transactional orders, revisions, royalties, reviews, and audit records.
- Supabase provides auth, storage, SQL, and RLS without requiring a large backend platform team.
- Next.js supports server-rendered marketplace pages, SEO, authenticated application areas, and server endpoints in one codebase.
- Provider adapters reduce lock-in around payments, email, analytics, and storage operations.

## Repository structure

```text
pcbod/
├─ app/
│  ├─ (marketing)/
│  │  ├─ page.tsx
│  │  ├─ how-it-works/
│  │  ├─ sell/
│  │  └─ about/
│  ├─ (marketplace)/
│  │  ├─ marketplace/
│  │  ├─ product/[slug]/
│  │  ├─ creator/[handle]/
│  │  └─ search/
│  ├─ (auth)/
│  │  ├─ sign-in/
│  │  ├─ sign-up/
│  │  └─ auth/callback/
│  ├─ (account)/
│  │  ├─ account/
│  │  ├─ orders/
│  │  └─ orders/[orderId]/
│  ├─ creator/
│  │  ├─ page.tsx
│  │  ├─ products/
│  │  ├─ products/new/
│  │  ├─ products/[productId]/
│  │  ├─ products/[productId]/revisions/
│  │  ├─ royalties/
│  │  └─ payouts/
│  ├─ admin/
│  │  ├─ page.tsx
│  │  ├─ reviews/
│  │  ├─ products/
│  │  ├─ revisions/
│  │  ├─ orders/
│  │  ├─ partners/
│  │  ├─ royalties/
│  │  ├─ payouts/
│  │  └─ audit/
│  ├─ api/
│  │  ├─ payments/
│  │  │  ├─ checkout/
│  │  │  └─ webhook/
│  │  ├─ uploads/
│  │  ├─ orders/
│  │  └─ internal/
│  ├─ layout.tsx
│  └─ globals.css
├─ components/
│  ├─ ui/
│  ├─ marketplace/
│  ├─ product/
│  ├─ creator/
│  ├─ commerce/
│  ├─ admin/
│  └─ layout/
├─ features/
│  ├─ auth/
│  ├─ catalog/
│  ├─ publishing/
│  ├─ revisions/
│  ├─ files/
│  ├─ checkout/
│  ├─ orders/
│  ├─ fulfillment/
│  ├─ royalties/
│  ├─ reviews/
│  ├─ payouts/
│  └─ audit/
├─ lib/
│  ├─ auth/
│  ├─ db/
│  ├─ payments/
│  ├─ email/
│  ├─ analytics/
│  ├─ storage/
│  ├─ observability/
│  ├─ validation/
│  ├─ security/
│  └─ utils/
├─ emails/
├─ public/
├─ supabase/
│  ├─ migrations/
│  ├─ seed/
│  └─ config.toml
├─ tests/
│  ├─ unit/
│  ├─ integration/
│  └─ e2e/
├─ scripts/
├─ .github/workflows/
├─ middleware.ts
├─ package.json
└─ README.md
```

## Architectural boundaries

- UI components MUST NOT directly contain payment, royalty, or authorization business rules.
- Domain operations live in `features/*/server` or equivalent server-only modules.
- Database access MUST be centralized through typed repository/query modules.
- Provider SDKs MUST only appear inside their provider adapter folders.
- Protected file access MUST occur through server-authorized methods.
- Admin authorization MUST be enforced server-side for every privileged operation.
- Approved revision mutation is forbidden at the data/service layer, not only the UI.

## Frontend architecture

### Rendering strategy

- Public marketplace/product/creator pages: server rendered where possible for SEO and fast first load.
- Authenticated dashboards: server-first with client islands for forms, tables, uploads, filters, and optimistic interactions.
- Do not turn the entire app into a client-rendered SPA.
- Sensitive server data must never be embedded in client bundles.

### State management

Use in this order:

1. URL state for search/filter/sort.
2. Server-rendered/request data for catalog and dashboards.
3. Local React state for transient UI.
4. Form state through React Hook Form when needed.
5. Do not introduce a global state library unless a concrete cross-tree client problem exists.

Cart policy:

- Authenticated cart persisted server-side.
- Guest cart may use signed/local storage only if implemented safely; otherwise require authentication before persisted checkout.
- Price must always be revalidated server-side at checkout.

## Backend architecture

Use Next.js server actions/route handlers for application-facing operations where suitable, but keep business logic in reusable domain services.

Suggested domain service pattern:

```text
UI / route handler
       ↓
authorization + validation
       ↓
domain service
       ↓
transaction/repository
       ↓
database / provider adapters
```

Do not place business-critical mutations in ad hoc component code.

## Database model

### `profiles`

- `id uuid pk` -> auth user id
- `handle text unique`
- `display_name text`
- `avatar_path text nullable`
- `bio text nullable`
- `role enum/bounded text`
- `creator_status enum`
- `account_status enum`
- timestamps

### `creator_profiles`

- `user_id uuid pk/fk profiles`
- `support_email_public boolean`
- `website_url nullable`
- `verification_status`
- `payout_status`
- timestamps

### `categories`

- `id`
- `slug unique`
- `name`
- `description`
- `sort_order`
- `active`

### `products`

- `id uuid pk`
- `creator_id fk`
- `slug unique`
- `title`
- `short_description`
- `description`
- `category_id`
- `status`
- `distribution_mode`
- `support_policy`
- `active_revision_id nullable`
- `published_at nullable`
- timestamps

Status examples:

- draft
- pending
- published
- archived
- suspended

### `product_media`

- `id`
- `product_id`
- `storage_path`
- `media_type`
- `alt_text`
- `sort_order`

### `product_tags`

Many-to-many product/tag mapping.

### `revisions`

- `id uuid pk`
- `product_id fk`
- `revision_label`
- `status`
- `changelog`
- `package_hash nullable`
- `submitted_at`
- `approved_at`
- `approved_by`
- `rejection_reason`
- `locked_at`
- timestamps

Revision states:

- draft
- submitted
- changes_requested
- approved
- rejected
- superseded

Approved rows are immutable except operational metadata explicitly allowed by policy.

### `revision_files`

- `id`
- `revision_id`
- `file_kind`
- `visibility`
- `storage_bucket`
- `storage_path`
- `original_filename`
- `mime_type`
- `size_bytes`
- `sha256`
- timestamps

Visibility:

- protected_manufacturing
- buyer_download
- public

### `variants`

- `id`
- `revision_id`
- `name`
- `type`
- `sku`
- `sell_price_minor`
- `currency`
- `manufacturing_cost_minor`
- `royalty_type`
- `royalty_value`
- `lead_time_min_days`
- `lead_time_max_days`
- `active`
- timestamps

Variant types:

- bare_pcb
- assembled_pcb
- kit

### `carts`

- `id`
- `buyer_id`
- timestamps

### `cart_items`

- `cart_id`
- `variant_id`
- `quantity`

Cart values are advisory. Checkout recalculates current sellable state and prices.

### `addresses`

Persisted buyer address book.

Historical order addresses MUST be snapshotted to orders.

### `orders`

- `id`
- `order_number unique`
- `buyer_id`
- `status`
- `currency`
- `subtotal_minor`
- `shipping_minor`
- `tax_minor`
- `discount_minor`
- `total_minor`
- `payment_provider`
- `payment_reference`
- `shipping_address_snapshot jsonb`
- timestamps

### `order_items`

- `id`
- `order_id`
- `product_id`
- `revision_id`
- `variant_id`
- `creator_id`
- `title_snapshot`
- `variant_snapshot`
- `quantity`
- `unit_price_minor`
- `unit_manufacturing_cost_minor`
- `unit_royalty_minor`
- `unit_platform_margin_minor`
- `commercial_snapshot jsonb`

### `payment_events`

Webhook/idempotency ledger:

- `provider`
- `provider_event_id unique`
- `event_type`
- `payload_hash`
- `processed_at`
- `status`

Do not store forbidden payment secrets or full card data.

### `manufacturing_partners`

Admin-only:

- `id`
- `name`
- `code`
- `status`
- `capabilities jsonb`
- `contact_data encrypted/secured`
- `lead_time_notes`
- timestamps

### `fulfillments`

- `id`
- `order_id`
- `partner_id nullable`
- `status`
- `work_order_reference`
- `tracking_provider`
- `tracking_number`
- `qc_status`
- `qc_notes`
- timestamps

### `order_status_events`

Append-only history:

- `id`
- `order_id`
- `from_status`
- `to_status`
- `actor_id`
- `reason`
- `created_at`

### `reviews`

- `id`
- `product_id`
- `revision_id`
- `order_item_id unique`
- `buyer_id`
- `rating`
- `title`
- `body`
- `status`
- timestamps

### `royalty_ledger`

Append-oriented financial ledger:

- `id`
- `creator_id`
- `order_item_id`
- `entry_type`
- `amount_minor`
- `currency`
- `status`
- `reason`
- `source_entry_id nullable`
- timestamps

Entry types:

- accrual
- adjustment
- reversal
- payout_debit

Statuses:

- pending
- eligible
- held
- paid
- reversed

### `payout_requests`

- `id`
- `creator_id`
- `currency`
- `amount_minor`
- `status`
- `requested_at`
- `approved_at`
- `paid_at`
- `external_reference`
- `admin_note`

### `audit_log`

Append-only:

- `id`
- `actor_id`
- `action`
- `entity_type`
- `entity_id`
- `metadata jsonb`
- `ip_hash nullable`
- `created_at`

Never put plaintext secrets or complete protected design files in audit metadata.

## Entity relationships

```text
Creator 1 ── * Product
Product 1 ── * Revision
Revision 1 ── * RevisionFile
Revision 1 ── * Variant

Buyer 1 ── * Order
Order 1 ── * OrderItem
OrderItem * ── 1 Revision
OrderItem * ── 1 Variant
Order 1 ── * OrderStatusEvent
Order 1 ── 0..* Fulfillment

OrderItem 1 ── 0..* RoyaltyLedger
Creator 1 ── * RoyaltyLedger
Creator 1 ── * PayoutRequest

OrderItem 1 ── 0..1 Review
Product 1 ── * Review
```

## API / mutation design

Prefer typed server functions for first-party UI, with route handlers for external/provider events.

### Public read operations

- `GET /marketplace`
- `GET /product/:slug`
- `GET /creator/:handle`

These may be implemented as server-rendered queries rather than REST endpoints.

### Payment endpoints

- `POST /api/payments/checkout`
- `POST /api/payments/webhook`

Checkout:

1. authenticate buyer;
2. validate cart;
3. re-read active variants;
4. validate product/revision sellability;
5. compute authoritative totals;
6. create pending order/checkout reference;
7. create provider checkout/session.

Webhook:

1. verify signature;
2. enforce provider event idempotency;
3. reconcile expected amount/currency;
4. transition order;
5. create fulfillment/ledger data transactionally as appropriate;
6. queue/send notifications.

### Upload endpoints

Use signed upload or server upload flows.

Protected file upload requires:

- authenticated creator;
- ownership of draft revision;
- allowed extension/mime;
- size limit;
- sanitized filename;
- generated storage key;
- post-upload checksum/metadata record.

## Authentication and authorization

### Identity

Supabase Auth user UUID is canonical identity.

### Authorization

Use both:

- application authorization checks;
- Postgres RLS.

Never rely on role values supplied by the browser.

Suggested authorization helpers:

- `requireUser()`
- `requireCreator()`
- `requireAdmin()`
- `requireProductOwner(productId)`
- `requireRevisionOwner(revisionId)`
- `canDownloadRevisionFile(user, file)`

### RLS principles

- Public can read published products and public media.
- Users can read/write their own profile/account data.
- Creators can write only their own draft products/revisions/files.
- Approved revision mutation denied to creators.
- Buyers can read only their own orders.
- Creators can read only aggregated/authorized order-line data for their products; they MUST NOT receive buyer addresses.
- Protected manufacturing files are not directly selectable/downloadable by buyers.
- Admin service operations use server-only credentials.

## Storage architecture

Buckets:

### `product-media`

Public or CDN-safe images only.

### `buyer-files`

Public or authenticated files explicitly allowed by product license.

### `manufacturing-private`

Private bucket.

Rules:

- random/non-guessable object keys;
- no permanent public URLs;
- short-lived signed URLs only after server authorization;
- manufacturing partner access issued only per approved work order;
- download/access auditing where feasible.

## Revision immutability

When a revision is approved:

1. compute stable metadata manifest;
2. store SHA-256 for each file;
3. compute package/manfiest hash;
4. set `locked_at`;
5. reject normal creator updates to files/spec fields covered by the approved revision.

A new hardware change creates a new revision row.

Orders reference revision IDs permanently.

## Price and financial architecture

All monetary values:

- integer minor units;
- explicit ISO currency code;
- never floating-point.

Authoritative checkout calculation lives server-side.

For each order line capture:

```text
sell price
- manufacturing cost
- creator royalty
- discounts allocation if applicable
- fees allocation if modeled
= platform contribution/margin
```

The exact accounting policy must be configured before real commercial launch and reviewed by qualified accounting/legal professionals.

## Royalty calculation

MVP supported royalty modes:

- fixed amount per unit;
- percentage of configured royalty basis.

Implement through a deterministic `RoyaltyPolicy` module.

Royalty amount is snapshotted to order item at purchase.

Do not recalculate old orders when creator terms change.

## Background jobs

Keep MVP minimal.

Jobs that should be asynchronous/retryable:

- transactional email;
- analytics fanout where needed;
- file scanning/checksum processing;
- webhook post-processing;
- royalty eligibility transition after hold period;
- stale checkout cleanup.

Implementation options:

1. host-native cron/queue for pilot; or
2. a durable job provider.

The application must expose jobs behind interfaces so infrastructure can change later.

Do not simulate completed background work in production.

## Search

MVP:

- Postgres full-text search;
- trigram index for fuzzy product title/creator handle matches;
- indexed category/status filters.

Later:

- dedicated search engine if catalog/query volume requires it.

## Caching

- Cache public catalog queries conservatively.
- Revalidate product page when publish/status/revision changes.
- Never cache private account/order/admin pages across users.
- Protected URLs must not be CDN-public.
- Checkout reads authoritative data without stale marketplace cache.

## Observability

Required:

- structured server logs;
- error reporting;
- payment webhook failure alerts;
- order/royalty mutation error alerts;
- audit log for admin actions;
- health/status endpoint where deployment platform allows;
- database backup configuration.

Metrics to monitor:

- checkout success rate;
- webhook failure count;
- paid orders stuck before fulfillment;
- fulfillment cycle time;
- failed uploads;
- protected file authorization failures;
- refund rate;
- royalty reconciliation discrepancies.

## Security model

### Threats considered

- IDOR/cross-account access;
- protected Gerber exfiltration;
- malicious uploads;
- admin privilege abuse;
- fake price submission;
- webhook spoofing;
- duplicate payments/order creation;
- XSS through creator descriptions/reviews;
- path traversal via filenames;
- leaked service keys;
- scraping of private endpoints;
- payout manipulation.

### Controls

- server-side authorization;
- RLS;
- private storage;
- signed URLs;
- strict input schemas;
- output encoding/sanitization;
- provider webhook verification;
- idempotency keys;
- CSRF-safe framework patterns;
- rate limiting;
- MFA encouraged/required for admins where supported;
- secret management via deployment environment;
- least-privilege provider keys;
- dependency/security scanning;
- audit logs.

## Environment configuration

Example categories only; actual names may differ:

```text
NEXT_PUBLIC_APP_URL=
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

PAYMENT_PROVIDER=
PAYMENT_PUBLIC_KEY=
PAYMENT_SECRET_KEY=
PAYMENT_WEBHOOK_SECRET=

EMAIL_PROVIDER=
EMAIL_API_KEY=
EMAIL_FROM=

ANALYTICS_PROVIDER=
ANALYTICS_KEY=

ERROR_MONITORING_DSN=
```

Rules:

- server secrets never prefixed `NEXT_PUBLIC_`;
- `.env*` containing secrets must be gitignored;
- `.env.example` contains names only, no real credentials.

## Testing strategy

### Unit tests

Required for:

- royalty calculations;
- money arithmetic;
- order state machine;
- permissions helpers;
- revision locking;
- pricing snapshot;
- status transition guards.

### Integration tests

Required for:

- creator submission;
- admin approval;
- protected file authorization;
- checkout creation;
- payment webhook idempotency;
- order creation;
- refund -> royalty reversal;
- review eligibility.

### E2E tests

Critical paths:

1. creator draft -> revision submit -> admin approve -> publish;
2. buyer browse -> checkout -> simulated provider success -> order;
3. admin fulfillment -> shipment -> delivery;
4. royalty appears in creator dashboard;
5. unauthorized protected file request is denied.

Payment E2E must use provider sandbox/test mode.

## CI/CD

GitHub Actions pipeline:

1. install with lockfile;
2. typecheck;
3. lint;
4. unit tests;
5. integration tests;
6. build;
7. optional E2E against preview environment;
8. deploy only after required checks pass.

Database migration rules:

- migrations committed;
- no manual production schema edits;
- destructive migrations require explicit review and backup strategy;
- forward-compatible deploy order where possible.

## Deployment architecture

```text
Browser
   |
   v
Next.js deployment
   |        \
   |         \--> Payment Provider
   |         \--> Email Provider
   |         \--> Error/Analytics Provider
   |
   v
Supabase
├─ Auth
├─ Postgres
└─ Storage
   ├─ product-media
   ├─ buyer-files
   └─ manufacturing-private
```

Manufacturing operations remain an admin workflow in MVP.

## Scaling considerations

Do not prematurely shard or split services.

Scale path:

1. optimize indexes/query plans;
2. add caching;
3. move heavy file/DFM processing to workers;
4. add dedicated search;
5. add dedicated job queue;
6. add manufacturer integration service;
7. extract payments/orders only if operational scale justifies it.

## Failure handling

### Payment provider outage

- preserve cart;
- do not create falsely paid order;
- display recoverable error;
- allow retry.

### Webhook delay

- buyer sees payment processing state;
- reconciliation job may query provider;
- no duplicate fulfillment.

### Storage failure

- keep revision draft;
- surface failed file state;
- never mark upload complete without metadata confirmation.

### Manufacturer failure

- admin records incident;
- move order to failed/rework workflow;
- inform buyer;
- refunds require explicit accounting/royalty correction.

### Email failure

- order state remains authoritative in app;
- retry notification;
- email failure must not roll back completed payment/order transaction.

## Important architectural decisions

### ADR-001 — Modular monolith

Chosen because MVP complexity is primarily business rules, not service scale.

### ADR-002 — Immutable approved revisions

Required for traceability, fulfillment accuracy, support, IP protection, and audit.

### ADR-003 — Private manufacturing storage

Required because protected designs are a core product promise.

### ADR-004 — Admin-routed manufacturing first

Chosen to validate demand before building costly factory integrations.

### ADR-005 — Provider abstraction

Payments, email, analytics, and observability must not infect domain logic.

### ADR-006 — Ledger-based creator earnings

Creator earnings are financial records and must be append-oriented/reconcilable rather than a mutable `balance` field with no history.

### ADR-007 — No automated DFM claims in MVP

Basic structural file validation is allowed. PCBOD must not claim a design is electrically correct or fabrication-safe unless a real validated DFM/manufacturing review system is implemented.
