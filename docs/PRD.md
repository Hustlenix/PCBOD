# PCBOD — Product Requirements Document

## Product name

**PCBOD** — Printed Circuit Boards On Demand

## One-sentence product definition

PCBOD is a marketplace where electronics designers publish production-ready PCB products, buyers order physical boards or assembled units, partner manufacturers fulfill each order, and designers earn a royalty without holding inventory.

## Problem statement

Independent electronics designers can create useful PCB designs but commercializing them requires manufacturing coordination, upfront inventory, sourcing, assembly, quality control, customer support, payments, and shipping. Buyers, meanwhile, often discover designs in fragmented communities where ordering a finished, tested board is difficult.

PCBOD removes that operational gap by turning a manufacturing package into a purchasable hardware listing and routing paid orders through a repeatable fulfillment workflow.

## Vision

Make publishing hardware feel closer to publishing software:

1. A creator uploads a production-ready design.
2. PCBOD validates required production files and product metadata.
3. The creator publishes a storefront listing after review.
4. A buyer orders a physical board, assembled unit, or kit.
5. PCBOD routes the order to a manufacturing partner.
6. The order is fabricated, optionally assembled/tested, and shipped.
7. PCBOD records the creator royalty and platform margin.

PCBOD should become a trusted commercial layer between hardware creators, manufacturers, and buyers.

## Target users

### Creator

An electronics engineer, maker, student team, hardware startup, educator, or open-source hardware author who has a PCB design and wants to sell manufactured copies without managing inventory or fulfillment.

### Buyer

A hobbyist, engineer, student, lab, business, or integrator who wants to buy a useful PCB product without manually obtaining Gerbers, sourcing a factory, and coordinating assembly.

### Admin / operations

PCBOD staff who approve listings, review production files, manage manufacturers, set manufacturing costs, handle orders, resolve issues, record quality checks, and approve royalty payouts.

### Manufacturing partner

A PCB fabrication or PCBA partner receiving approved manufacturing packages and fulfillment instructions. In MVP this interaction may be managed by PCBOD operations rather than requiring a full partner portal.

## Jobs to be done

### Creator jobs

- Publish a PCB as a commercial product.
- Keep manufacturing files private if desired.
- Define supported product variants.
- Set or accept a royalty model.
- Track sales and accrued royalties.
- Publish improved hardware revisions without breaking existing orders.
- Provide firmware, documentation, and usage instructions.

### Buyer jobs

- Discover useful hardware by use case.
- Understand exactly what is included in an order.
- Compare bare PCB, assembled PCB, and kit variants.
- Place and pay for an order.
- Track fulfillment.
- Access buyer-facing documentation and firmware.
- Review verified purchases.

### Admin jobs

- Review submitted products for completeness.
- Approve or reject listings.
- Freeze the exact manufacturing revision attached to each order.
- Set production cost and selling price.
- Route orders to a manufacturing partner.
- Update manufacturing and shipping status.
- Record quality-control results.
- Resolve refunds/disputes.
- Approve creator royalty payouts.

## Product goals

1. Let a creator submit a manufacturable PCB product without needing their own inventory.
2. Let a buyer purchase a physical PCB product in a conventional ecommerce flow.
3. Keep sensitive production files private from buyers when the creator selects a protected license.
4. Ensure every paid order is tied to an immutable approved product revision.
5. Maintain transparent royalty accounting.
6. Make manufacturing operations possible manually at first, without pretending full factory automation exists.
7. Provide enough marketplace quality and trust signals that buyers can evaluate a hardware product before purchasing it.

## Measurable success criteria

For the initial pilot:

- At least 10 approved creator listings.
- At least 3 independent creators.
- At least 20 completed buyer orders.
- At least 95% of paid orders associated with a valid immutable approved revision.
- 0 unauthorized public exposures of protected manufacturing files.
- Order status visible to the buyer for 100% of paid orders.
- Royalty ledger generated correctly for 100% of completed eligible orders.
- Admin can reconcile gross order value, manufacturing cost, platform margin, refunds, and creator royalty per order.
- Core storefront pages achieve acceptable production web performance on typical mobile networks.
- No critical accessibility violations on primary purchase and creator submission flows.

## Non-goals for MVP

- Owning or operating a PCB factory.
- Fully automatic DFM sign-off.
- Guaranteed electrical correctness of creator designs.
- Automated global tax handling.
- Automated multi-currency creator payouts.
- Real-time bidding among factories.
- Buyer access to protected Gerber/source files.
- Full CAD editing in the browser.
- PCB schematic simulation.
- Automatic component substitution.
- 3D enclosure manufacturing.
- CNC, cable, injection-molding, or non-PCB manufacturing.
- Native mobile apps.
- Community forums.
- Token/crypto-based royalties.

## Core product loop

### Supply loop

Creator submits design -> PCBOD reviews -> listing is approved -> product is discoverable -> buyer orders -> PCBOD fulfills -> creator earns -> creator publishes more/better hardware.

### Demand loop

Buyer discovers product -> evaluates evidence/specs -> buys -> receives tested physical hardware -> leaves verified review -> marketplace trust increases -> more buyers discover products.

## Assumptions

- Initial manufacturing will be handled by external PCB/PCBA partners.
- PCBOD operations can manually route manufacturing while demand is low.
- A creator may select a protected commercial mode in which manufacturing files remain private.
- Manufacturing cost and lead time may be set or overridden by PCBOD admins until reliable automated quotations exist.
- Creator royalties accrue only after an order reaches the configured eligible state, normally `delivered` after the refund hold period.
- Production files are versioned and never silently replaced for existing orders.
- Payments and payout providers are implementation adapters rather than hard-coded business assumptions.
- MVP can launch in one primary market/currency before global expansion.

## Product terminology

Use these terms consistently:

- **Product**: marketplace item visible to buyers.
- **Revision**: immutable approved manufacturing version of a product.
- **Variant**: purchasable format, such as Bare PCB, Assembled PCB, or Kit.
- **Manufacturing package**: protected production files required to fabricate/assemble a revision.
- **Buyer package**: public/downloadable documentation safe for customers.
- **Creator royalty**: creator earnings attributable to an eligible completed order.
- **Fulfillment**: fabrication, optional assembly/testing, packaging, and shipping.
- **Protected design**: production files are not exposed to buyers.
- **Open design**: creator explicitly permits selected source/manufacturing downloads.

## Roles and permissions

### Guest

Can:

- browse public listings;
- search/filter;
- read product pages;
- view creator profiles;
- register/sign in.

Cannot:

- purchase;
- review;
- submit products;
- access private files.

### Buyer

Can:

- do everything a guest can;
- manage account and addresses;
- purchase products;
- see order history and status;
- access buyer files allowed by the product;
- submit verified-purchase reviews.

Cannot:

- access protected manufacturing packages;
- alter order revisions after payment.

### Creator

Can:

- do everything a buyer can;
- create draft products;
- upload manufacturing and buyer files;
- create revisions;
- submit revisions for review;
- view sales/royalty analytics for their own products;
- request payout when eligible;
- archive their products.

Cannot:

- self-approve a product/revision;
- modify an approved revision in place;
- directly set internal manufacturing cost;
- access other creators' private files.

### Admin

Can:

- manage users, creators, products, revisions, orders, costs, manufacturers, refunds, royalty adjustments, payouts, and moderation;
- access protected manufacturing packages as required for operations;
- approve/reject revisions;
- change listing visibility;
- route fulfillment;
- record quality checks.

All privileged actions must be audited.

## Primary user journeys

### Journey A — creator publishes a product

1. Creator signs in.
2. Creator opens Creator Studio.
3. Creator creates a product draft.
4. Creator enters:
   - name;
   - short description;
   - use case;
   - category;
   - technical specifications;
   - compatibility;
   - warnings/limitations;
   - support information.
5. Creator selects license/distribution mode:
   - Protected Commercial;
   - Open Source;
   - Public Docs + Protected Manufacturing.
6. Creator creates a revision.
7. Creator uploads required production files.
8. System performs basic structural validation:
   - allowed extensions;
   - archive integrity;
   - required file presence declared by creator;
   - file size limits;
   - malware scanning hook;
   - metadata completion.
9. Creator adds product media and buyer documentation.
10. Creator proposes variants and creator royalty.
11. Creator submits revision for review.
12. Admin reviews manufacturability, commercial terms, and content.
13. Admin enters/approves production cost, lead time, sell price, and royalty basis.
14. Revision becomes approved.
15. Product becomes publishable.
16. Creator publishes listing.

### Journey B — buyer orders a product

1. Buyer discovers a listing.
2. Buyer opens product page.
3. Buyer reviews:
   - photos/renders;
   - description;
   - revision;
   - specs;
   - included items;
   - estimated lead time;
   - creator;
   - verified reviews;
   - license/documentation;
   - variant pricing.
4. Buyer selects a variant and quantity.
5. Buyer adds shipping address.
6. System calculates order subtotal, shipping, tax when configured, and total.
7. Buyer pays using configured payment provider.
8. Payment webhook confirms payment.
9. System creates fulfillment record bound to the exact approved revision.
10. Admin routes order to manufacturer.
11. Order progresses through manufacturing/assembly/QC/shipping.
12. Buyer receives status updates.
13. Delivery is recorded.
14. Royalty becomes pending/eligible according to payout rules.
15. Buyer may post a verified review.

### Journey C — admin fulfills an order

1. Admin sees a paid order in Operations.
2. Admin confirms product revision and manufacturing package.
3. Admin assigns manufacturing partner.
4. System creates an operations work order.
5. Admin provides partner the minimum required production package through an authorized method.
6. Status updates:
   - paid;
   - queued;
   - manufacturing;
   - assembly;
   - quality_check;
   - packed;
   - shipped;
   - delivered.
7. Admin records tracking details.
8. QC outcome and notes are recorded.
9. Refund/rework path is available if production fails.
10. Completed order flows into royalty accounting.

### Journey D — creator publishes a new revision

1. Creator chooses an existing product.
2. Creator creates a new draft revision.
3. Files are uploaded as a new immutable package.
4. Revision goes through review.
5. After approval, creator/admin may mark it as the active purchasable revision.
6. Previous orders remain bound to their original revision.
7. Historic revision metadata stays available for support/audit.

## Marketplace requirements

### Home page

Must include:

- clear value proposition;
- search;
- featured products;
- category discovery;
- explanation of how PCBOD works;
- creator CTA;
- trust/manufacturing explanation;
- recent or curated launches;
- no fabricated marketplace activity.

### Browse/search

Must support:

- keyword search;
- category;
- board type/use case tags;
- availability/active status;
- bare/assembled/kit availability;
- price range where applicable;
- sort by newest, popularity, price, or rating once sufficient data exists.

Do not show fake ratings, fake sales counts, fake inventory, or fake scarcity.

### Product page

Must include:

- product title;
- creator attribution;
- current approved revision;
- product media;
- concise use case;
- detailed description;
- technical specifications;
- dimensions where supplied;
- included/excluded items;
- warnings and prerequisites;
- variant selector;
- quantity;
- unit price and estimated lead time;
- documentation links;
- license/distribution mode;
- support policy;
- verified reviews;
- order CTA;
- revision/changelog summary.

If a product is unapproved, archived, suspended, or has no active sellable revision, purchase must be disabled.

### Creator profile

Must include:

- display name;
- bio;
- public links approved by policy;
- published products;
- aggregate verified product metrics only when real;
- joined date;
- optional verification indicator controlled by admin.

## Creator Studio requirements

### Dashboard

Must show:

- published products;
- drafts;
- pending reviews;
- orders attributed to creator products;
- gross product sales;
- eligible royalties;
- pending royalties;
- paid royalties.

Money metrics must distinguish sales from creator earnings.

### Product editor

Must support:

- draft autosave;
- product metadata;
- categories/tags;
- rich but sanitized description;
- product images;
- buyer documents;
- product status;
- support contact/preferences;
- license/distribution mode.

### Revision manager

Must support:

- semantic or creator-defined revision label;
- changelog;
- production files;
- buyer files;
- supported variants;
- dimensions/spec metadata;
- submission status;
- review notes;
- approval timestamp;
- immutable approved package hash.

Approved revision content MUST NOT be edited in place. Corrections create a new revision.

### File handling

Manufacturing package may include:

- Gerbers;
- drill files;
- BOM;
- pick-and-place/CPL;
- assembly drawings;
- schematic PDF;
- firmware binaries;
- test instructions;
- optional CAD/source files.

Buyer package may include:

- quick-start guide;
- firmware;
- API documentation;
- wiring diagrams;
- open-source files explicitly permitted by creator.

Protected manufacturing files must be stored privately.

## Order requirements

An order must store an immutable commercial snapshot including:

- product ID;
- revision ID;
- variant ID;
- title at purchase;
- quantity;
- unit sell price;
- manufacturing cost basis;
- creator royalty basis;
- platform margin basis;
- shipping;
- tax if applicable;
- discounts if applicable;
- currency;
- buyer;
- shipping destination snapshot.

Changes to current product pricing after payment must not alter historical orders.

### Order states

Canonical MVP states:

- `payment_pending`
- `paid`
- `queued`
- `manufacturing`
- `assembly`
- `quality_check`
- `packed`
- `shipped`
- `delivered`
- `cancelled`
- `refund_pending`
- `refunded`
- `failed`

Transitions must be validated server-side.

## Royalty requirements

- Each eligible order line creates a royalty ledger entry.
- Ledger entries reference order line, creator, product, revision, currency, rule, amount, and status.
- Royalty statuses:
  - pending;
  - eligible;
  - held;
  - paid;
  - reversed.
- Refunds must reverse or adjust royalties.
- Admin adjustments require reason + audit log.
- Creator dashboard must never label pending funds as paid.
- Payout requests cannot exceed eligible balance.
- MVP may use manual/off-platform payout execution, but every payout must be recorded with reference/evidence fields.
- Do not represent PCBOD as an escrow service unless the legal/payment architecture actually supports escrow.

## Reviews

- Only buyers with eligible completed orders may leave verified reviews.
- One review per eligible order line unless admin policy allows updates.
- Review includes rating, title, body, optional media, and product revision.
- Admin can moderate abusive/illegal content.
- Moderation must not silently turn criticism into positive content.
- Aggregate ratings use only published, non-removed reviews.

## Admin requirements

Admin console must support:

- users;
- creator verification/status;
- product moderation;
- revision review;
- manufacturing cost configuration;
- variant pricing;
- order operations;
- manufacturer records;
- QC records;
- refunds;
- royalty ledger;
- payout records;
- support notes;
- audit logs;
- platform settings.

## Manufacturing partner records

Store:

- legal/display name;
- internal code;
- supported capabilities;
- contact info;
- status;
- notes;
- typical lead time;
- internal pricing metadata;
- quality/incident notes.

MVP partner records are admin-only.

## Functional requirements

### Authentication

- Email-based authentication is required.
- Social login is optional.
- Session handling must be server-aware.
- Privileged pages require authorization, not only UI hiding.
- Creator functionality requires creator role/status.

### Search

MVP may use database full-text/trigram search rather than an external search engine.

### Notifications

MVP requires transactional email for:

- email verification/auth if applicable;
- order confirmation;
- major order status changes;
- shipment/tracking;
- creator revision approval/rejection;
- payout status.

In-app notifications are optional for MVP.

### Analytics events

Track at minimum:

- `product_viewed`
- `search_performed`
- `variant_selected`
- `checkout_started`
- `payment_succeeded`
- `order_created`
- `order_status_changed`
- `creator_product_created`
- `revision_submitted`
- `revision_approved`
- `product_published`
- `review_submitted`

Do not send protected file names/content or sensitive payment information to analytics.

## Non-functional requirements

### Performance

Target on production storefront pages:

- fast server-rendered first load;
- optimized responsive images;
- avoid unnecessary client-side JavaScript;
- lazy-load non-critical media;
- database queries indexed for primary browse/order paths.

Performance budgets:

- storefront route initial JS should remain deliberately small;
- no unoptimized multi-megabyte hero assets;
- product thumbnails delivered in responsive sizes;
- avoid loading protected files into browser state.

### Reliability

- Payment webhooks must be idempotent.
- Order creation must tolerate duplicate webhook delivery.
- Royalty ledger mutations must be transactionally safe.
- Important state transitions must be auditable.
- Failed background work must be retryable.

### Security

- Private production files are inaccessible from public storage URLs.
- Signed download URLs must be short-lived and authorization checked.
- RLS/server authorization must prevent cross-creator data access.
- Admin secrets stay server-side.
- Payment amounts are calculated server-side.
- Webhook signatures are verified.
- Upload file types and size are validated.
- Rich text is sanitized.
- Rate limiting is applied to auth-sensitive and abuse-prone endpoints.
- Audit all admin access to protected production downloads where practical.

### Privacy

- Collect only data required for accounts, transactions, delivery, support, and compliance.
- Provide clear account/privacy policy links.
- Protect shipping addresses and transaction data.
- Never expose buyer addresses to creators.
- Manufacturers receive only fulfillment data required to perform the order.
- Provide an account deletion/request path subject to legally required transaction retention.

### Accessibility

Primary target: WCAG 2.2 AA practices.

Required:

- keyboard navigability;
- visible focus;
- labels for all form controls;
- semantic headings;
- sufficient contrast;
- non-color-only status indicators;
- accessible dialogs;
- accessible error summaries;
- reduced-motion support;
- alt text for product imagery.

## Error and edge cases

Handle explicitly:

- payment succeeds but browser closes;
- duplicate payment webhook;
- product becomes suspended during checkout;
- selected revision replaced after cart creation;
- manufacturing package missing required files;
- protected file access attempt by unauthorized user;
- creator account suspended with active orders;
- refund after royalty becomes eligible;
- partial refund;
- manufacturing failure/rework;
- shipment loss;
- unsupported address;
- variant price changes before payment;
- product archived while historic buyer needs documentation;
- creator uploads corrupt archive;
- unsafe filename/path traversal attempts;
- duplicate review submissions;
- payout requested while refund hold exists.

## MVP scope

### Buyer-facing

- marketing home;
- marketplace browse/search;
- product detail page;
- creator public profile;
- auth;
- cart/checkout;
- address capture;
- payment adapter;
- order confirmation;
- order history/detail;
- shipment tracking field;
- buyer documentation;
- verified reviews.

### Creator-facing

- creator onboarding;
- Creator Studio dashboard;
- product drafts;
- media uploads;
- revision manager;
- protected manufacturing package upload;
- buyer documentation upload;
- submit-for-review workflow;
- review feedback;
- publish/archive;
- sales and royalty ledger views;
- payout request record.

### Admin-facing

- product/revision moderation;
- manufacturing partner records;
- manufacturing cost + sell-price configuration;
- order operations;
- fulfillment state control;
- QC notes;
- refund workflow hooks;
- royalty adjustments;
- payout records;
- audit log;
- basic platform configuration.

### Operations

- private storage;
- immutable revision binding;
- transactional emails;
- payment webhooks;
- royalty ledger;
- manual manufacturer routing;
- manual or semi-manual shipment tracking.

## Post-MVP scope

- automated Gerber parsing and DFM checks;
- interactive board preview;
- automated manufacturer quotations;
- manufacturer portal;
- component availability checks;
- automated PCBA BOM pricing;
- automated creator payouts;
- multi-currency;
- global tax/VAT/GST automation;
- creator storefront customization;
- following/wishlists;
- recommendations;
- product collections;
- version subscriptions/reorder flows;
- bulk/B2B quotes;
- API;
- KiCad/EasyEDA/Altium publishing plugins;
- enclosure/3D-print fulfillment;
- public remix/fork licensing;
- upstream royalty splits;
- factory quality scoring;
- fulfillment optimization.

## Acceptance criteria

The MVP is complete only when all are true:

1. A creator can register, become an authorized creator, create a product, upload production files privately, create a revision, and submit it.
2. An admin can review that revision, configure commercial data, approve it, and make it sellable.
3. A guest can discover the product and see accurate listing data without seeing protected manufacturing files.
4. A buyer can pay for an active variant.
5. A verified payment creates exactly one paid order even if the webhook is delivered multiple times.
6. The order stores the immutable revision and financial snapshot.
7. Admin can progress the order through fulfillment states and add tracking.
8. Buyer can view current order status.
9. Completing the eligible order creates/updates the correct creator royalty ledger entry.
10. Refund paths correctly reverse affected royalty accounting.
11. Creator can see sales, pending/eligible/paid royalties, and payout history.
12. Protected manufacturing packages cannot be downloaded by unauthorized buyers or creators.
13. Approved revisions cannot be modified in place.
14. Primary flows work on mobile and desktop.
15. Production contains no fake orders, ratings, creators, sales numbers, or manufacturer claims.
16. Deployment, environment configuration, and database migrations are reproducible from the repository.

## Launch definition

**Pilot launch** means:

- production deployment is live on the configured domain;
- authentication, storage, database, and payment webhooks work in production;
- at least one real manufacturing partner workflow has been rehearsed end-to-end;
- at least three real products have passed admin review;
- checkout can be restricted to the supported service geography;
- policies for terms, privacy, creator agreement, refunds, manufacturing tolerances, and prohibited products are published;
- incident/contact path exists;
- monitoring and backups are enabled;
- an admin can fulfill an order without editing the database manually.

Launch does not require owning manufacturing equipment.
