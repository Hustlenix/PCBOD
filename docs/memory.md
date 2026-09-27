# PCBOD — Project Memory

## Project summary

PCBOD is a creator marketplace for physical PCB products.

Creators publish production-ready PCB designs. Buyers order a bare PCB, assembled PCB, or kit. PCBOD handles checkout and fulfillment through manufacturing partners. Creators receive royalties without needing to hold inventory or personally coordinate every manufacturing order.

## Current objective

Build and deploy a production-capable marketplace MVP that validates the creator -> buyer -> manufacturing partner -> royalty loop before investing in PCB manufacturing equipment.

## Finalized decisions

- Product name: **PCBOD**.
- Meaning: **Printed Circuit Boards On Demand**.
- Core positioning: **Publish hardware like software.**
- Business model: creator marketplace + manufacturing/fulfillment layer.
- MVP does **not** require an owned factory.
- Manufacturing is initially routed manually through external partners.
- Creators can publish protected designs whose manufacturing files are not given to buyers.
- Buyers purchase physical outputs, not necessarily design files.
- Approved manufacturing revisions are immutable.
- Each order is permanently tied to the exact purchased revision.
- Creator earnings use an auditable royalty ledger.
- The platform must never fabricate marketplace metrics or claim unimplemented manufacturing automation.
- Bare PCB, assembled PCB, and kit are the initial variant types.
- Admin review is required before a revision becomes sellable.
- Automated DFM is post-MVP; MVP only does safe basic file/metadata validation plus human/admin manufacturing review.

## Target users

- PCB/electronics creators.
- Makers, engineers, students, labs, startups, and hardware buyers.
- PCBOD operations/admin.
- Manufacturing partners, initially managed through admin rather than a dedicated partner portal.

## Stack

- Next.js App Router.
- TypeScript strict mode.
- React.
- Tailwind CSS.
- accessible repository-owned UI primitives.
- Zod.
- Supabase Postgres.
- Supabase Auth.
- Supabase Storage.
- RLS.
- Payment provider adapter.
- Transactional email adapter.
- GitHub Actions.
- Vercel-compatible deployment.

## Key architecture decisions

- Modular monolith for MVP.
- Postgres is the source of truth.
- Private manufacturing files live in private object storage.
- Signed protected-file access only after server authorization.
- Approved revisions are locked and hashed/checksummed.
- Money uses integer minor units + explicit currency.
- Payment webhooks are verified and idempotent.
- Orders snapshot pricing, manufacturing cost basis, royalty basis, product, variant, and revision.
- Royalty accounting is append-oriented.
- Manufacturer routing is manual/admin-driven first.
- Provider SDKs stay behind adapters.
- No microservices until real scale requires them.

## Primary routes

Public:

- `/`
- `/marketplace`
- `/search`
- `/product/[slug]`
- `/creator/[handle]`
- `/how-it-works`
- `/sell`

Buyer:

- `/account`
- `/cart`
- `/checkout`
- `/orders`
- `/orders/[orderId]`

Creator:

- `/creator`
- `/creator/products`
- `/creator/products/new`
- `/creator/products/[productId]`
- `/creator/products/[productId]/revisions`
- `/creator/royalties`
- `/creator/payouts`

Admin:

- `/admin`
- `/admin/revisions`
- `/admin/products`
- `/admin/orders`
- `/admin/partners`
- `/admin/royalties`
- `/admin/payouts`
- `/admin/audit`

## Core entities

- profiles
- creator_profiles
- categories
- products
- product_media
- revisions
- revision_files
- variants
- carts/cart_items
- addresses
- orders/order_items
- payment_events
- manufacturing_partners
- fulfillments
- order_status_events
- reviews
- royalty_ledger
- payout_requests
- audit_log

## Core product rules

- Protected manufacturing files never go to unauthorized buyers.
- Creators cannot self-approve revisions.
- Approved revisions cannot be edited in place.
- A hardware change creates a new revision.
- Checkout prices are authoritative server-side.
- Payment events are idempotent.
- Buyer addresses are private from creators.
- Creator royalty terms are snapshotted at purchase.
- Refunds must reverse/adjust royalties.
- Reviews must come from eligible verified purchases.
- Do not display fake sales, ratings, manufacturing partners, reviews, tracking, or DFM results.
- Do not claim PCBOD owns a factory until true.

## Design direction

PCBOD should look like a professional electronics engineering catalog + modern ecommerce marketplace.

Visual traits:

- warm technical-paper canvas;
- graphite typography;
- controlled soldermask-green brand accent;
- subtle copper technical accent;
- restrained radius/shadows;
- real product imagery;
- sparse PCB trace/grid/silkscreen motifs;
- public marketplace is breathable;
- creator/admin interfaces are denser.

Avoid generic AI/SaaS aesthetics, neon cyberpunk, excessive glassmorphism, gradient blobs, giant empty hero typography, fake product photography, and decorative technical noise.

## Core user flow

Creator:

`Create product -> upload protected manufacturing package -> create revision -> submit -> admin review -> approve -> publish -> sell -> earn royalty`

Buyer:

`Discover -> select variant -> checkout -> pay -> manufacturing -> QC -> ship -> receive -> verified review`

Admin:

`Review revision -> configure costs/price/royalty -> approve -> route paid order -> update fulfillment/QC/shipping -> reconcile royalties/payouts`

## MVP boundary

Included:

- marketplace;
- product pages;
- creator profiles;
- auth;
- creator studio;
- private manufacturing upload;
- revision workflow;
- admin review;
- cart;
- payment;
- immutable orders;
- manual manufacturing routing;
- order tracking;
- QC notes;
- royalty ledger;
- manual payout records;
- verified reviews;
- SEO;
- security/accessibility basics;
- production deployment.

Deferred:

- owned factory;
- full automated DFM;
- CAD editing;
- component substitution;
- automatic manufacturer bidding;
- automated payouts;
- manufacturer portal;
- multi-currency/global tax engine;
- KiCad/Altium/EasyEDA plugins;
- enclosures and non-PCB manufacturing;
- remix/upstream royalty graph.

## Important constraints

- No fake production behavior.
- No exposed service keys.
- No public protected-file URLs.
- No floating-point money.
- No direct creator access to buyer addresses.
- No production launch until terms/privacy/refunds/creator agreement/manufacturing disclosures exist.
- Real provider/business/legal configuration must be completed before accepting real payments.

## Intentionally deferred decisions

These should be chosen when the launch market/business account is ready:

- first production payment provider;
- first production transactional email provider;
- exact payout method;
- exact supported launch geography;
- tax/GST treatment;
- refund hold period before royalty becomes eligible;
- first manufacturing partner(s);
- exact prohibited-product policy;
- exact royalty percentage/fixed fee defaults.

The code must keep these configurable rather than hard-coded where practical.

## Current implementation status

Planning package complete. No implementation state is assumed.

## Next recommended action

Start `phases.md` Phase 0, then Phase 1 and Phase 2. Do not begin checkout/manufacturing automation before revision immutability, authorization, private storage, and admin approval exist.
