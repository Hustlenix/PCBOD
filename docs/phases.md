# PCBOD — Execution Phases

The phases are sequential. OpenCode agents may work in parallel only when tasks do not modify the same schema/domain contract.

## Phase 0 — Repository and product contract

### Objective

Create a deterministic project baseline and make the six planning documents part of the repository.

### Prerequisites

- Finalized execution package.
- Git repository.
- Deployment accounts can be created later if not yet available.

### Tasks

- Initialize Next.js + TypeScript project.
- Enable strict TypeScript.
- Configure package manager and lockfile.
- Configure lint/format/typecheck.
- Add `docs/` or root copies of the six planning documents.
- Add `.env.example`.
- Add basic GitHub Actions.
- Create feature/module folder structure from `Architecture.md`.
- Create placeholder provider interfaces for payment/email/analytics/observability.
- Add baseline test runner.
- Add README setup instructions.

### Likely files/modules

- `package.json`
- `tsconfig.json`
- `eslint.config.*`
- `.env.example`
- `.github/workflows/ci.yml`
- `app/`
- `features/`
- `lib/`
- `tests/`

### Deliverables

- App boots locally.
- CI installs, typechecks, lints, tests, and builds.
- No secrets in repository.

### Verification checklist

- [ ] Fresh clone can install from lockfile.
- [ ] `typecheck` passes.
- [ ] `lint` passes.
- [ ] test command passes.
- [ ] production build passes.
- [ ] `.env.example` contains names only.

### Exit criteria

Stable build/development foundation exists.

---

## Phase 1 — Design system and public shell

### Objective

Establish PCBOD's visual language and global information architecture before feature pages diverge.

### Prerequisites

- Phase 0 complete.

### Tasks

- Implement tokens from `design.md`.
- Implement typography.
- Build:
  - Button;
  - Input;
  - Textarea;
  - Select;
  - Checkbox;
  - Badge/status chip;
  - Card;
  - Dialog;
  - Dropdown;
  - Tabs;
  - Table;
  - Pagination;
  - Toast;
  - Empty state;
  - Skeleton;
  - File row;
  - Price display.
- Build public header/footer.
- Build authenticated app shell.
- Build creator/admin side navigation.
- Implement responsive behavior.
- Implement reduced-motion behavior.
- Add visual component sandbox/story route in development if useful.

### Likely modules

- `app/globals.css`
- `components/ui/*`
- `components/layout/*`
- `lib/design/*`

### Deliverables

- Reusable design system.
- Marketing/public shell.
- Dashboard shell.

### Verification checklist

- [ ] Mobile width tested.
- [ ] Keyboard navigation works.
- [ ] Focus states visible.
- [ ] No generic gradient/glass landing-page aesthetic.
- [ ] Dark/light behavior matches design decision if both themes are implemented.

### Exit criteria

All subsequent screens can use consistent primitives.

---

## Phase 2 — Database, auth, authorization, storage

### Objective

Create secure identity, core data model, migrations, RLS, and file storage foundations.

### Prerequisites

- Supabase project or local Supabase.
- Phase 0 complete.

### Tasks

- Implement SQL enums/check constraints.
- Implement tables:
  - profiles;
  - creator_profiles;
  - categories;
  - products;
  - product_media;
  - tags/product_tags;
  - revisions;
  - revision_files;
  - variants;
  - carts/cart_items;
  - addresses;
  - orders/order_items;
  - payment_events;
  - manufacturing_partners;
  - fulfillments;
  - order_status_events;
  - reviews;
  - royalty_ledger;
  - payout_requests;
  - audit_log.
- Add indexes.
- Configure Supabase Auth.
- Create profile bootstrap flow.
- Implement server auth helpers.
- Implement RLS.
- Create storage buckets:
  - product-media;
  - buyer-files;
  - manufacturing-private.
- Implement secure upload key generation.
- Implement checksum metadata path.
- Add authorization tests.

### Deliverables

- Reproducible database.
- Authentication.
- Role system.
- Private protected storage.
- Core policy tests.

### Verification checklist

- [ ] Buyer cannot read another buyer's orders.
- [ ] Creator cannot edit another creator's product.
- [ ] Buyer cannot access manufacturing-private objects.
- [ ] Creator cannot modify approved revision.
- [ ] Admin authorization is server-side.
- [ ] Service role is never exposed to client.

### Exit criteria

Data/security foundation is safe enough to build product workflows.

---

## Phase 3 — Public marketplace

### Objective

Build trustworthy marketplace discovery and product pages against real database records.

### Prerequisites

- Phase 1 and Phase 2.

### Tasks

- Home page.
- Marketplace browse.
- Search.
- Category filtering.
- Sort.
- Product cards.
- Product detail page.
- Creator profile.
- Product media gallery.
- Variant selector.
- Lead-time display.
- Documentation links.
- Revision/changelog section.
- SEO metadata.
- sitemap/robots.
- Empty states.
- Pagination.

### Seed policy

Development/test may contain labeled seed data. Production must not present seed/demo content as real listings.

### Deliverables

- Public browse/search experience.
- Product detail routes.
- Creator profile routes.

### Verification checklist

- [ ] Only published products appear publicly.
- [ ] Only active approved revision is purchasable.
- [ ] Protected file metadata/URLs absent from public payload.
- [ ] Product page shows explicit included/excluded items.
- [ ] SEO metadata is accurate.
- [ ] Search/filter URL is shareable.

### Exit criteria

A visitor can understand PCBOD and evaluate real published hardware.

---

## Phase 4 — Creator Studio and publishing workflow

### Objective

Allow creators to submit real PCB products safely.

### Prerequisites

- Auth/storage/data foundation complete.

### Tasks

- Creator onboarding/status.
- Creator dashboard.
- Product draft create/edit.
- Product media upload.
- Distribution/license mode.
- Revision creation.
- Manufacturing package upload.
- Buyer documentation upload.
- File metadata/checksum.
- Required metadata validation.
- Revision submission.
- Review notes display.
- Publish/archive actions.
- Revision history.
- Creator public profile editing.

### Admin dependency

Add minimal admin revision queue if needed before full admin operations phase.

### Deliverables

- End-to-end creator submission.
- Private file handling.
- Revision locking mechanics.

### Verification checklist

- [ ] Creator can draft without exposing product publicly.
- [ ] Protected upload is private.
- [ ] Submitted revision cannot be silently altered during review.
- [ ] Approved revision locks correctly.
- [ ] New change requires new revision.
- [ ] Creator sees rejection/change-request reason.
- [ ] Product cannot be published without active approved revision.

### Exit criteria

Supply can enter the marketplace without direct database manipulation.

---

## Phase 5 — Admin moderation and manufacturing configuration

### Objective

Give operations a real control plane for products, costs, and manufacturing.

### Prerequisites

- Creator submission workflow.

### Tasks

- Admin dashboard.
- Revision review queue.
- Product moderation.
- Approve/reject/change-request.
- Configure variants.
- Set:
  - manufacturing cost;
  - sell price;
  - royalty;
  - lead time.
- Manufacturing partner CRUD.
- Protected file access with authorization/audit.
- Product suspension/archive.
- Audit log views.

### Deliverables

- Admin can take a submitted creator project to a sellable listing.

### Verification checklist

- [ ] Non-admin cannot call approval mutations.
- [ ] Approval creates revision lock/hash.
- [ ] Cost/private partner data not exposed publicly.
- [ ] Admin protected-file access is auditable.
- [ ] Product suspension blocks new checkout.

### Exit criteria

PCBOD operations can curate and price marketplace inventory.

---

## Phase 6 — Cart, checkout, payment, immutable order snapshot

### Objective

Turn a marketplace listing into a real paid order.

### Prerequisites

- Active approved variants.
- Payment provider sandbox credentials.

### Tasks

- Cart.
- Quantity validation.
- Address flow.
- Checkout review.
- Server authoritative price calculation.
- Payment provider adapter.
- Sandbox provider integration.
- Pending order/checkout record.
- Webhook verification.
- Webhook idempotency.
- Paid order transition.
- Order commercial snapshots.
- Buyer order confirmation/detail.
- Transactional order email.

### Deliverables

- Real sandbox end-to-end payment flow.
- Idempotent paid-order creation.

### Verification checklist

- [ ] Browser total manipulation has no effect.
- [ ] Duplicate webhook does not duplicate order/fulfillment.
- [ ] Suspended product cannot complete new checkout.
- [ ] Order references exact revision.
- [ ] Order captures historical price/royalty/cost basis.
- [ ] Failed/cancelled checkout is recoverable.

### Exit criteria

A buyer can pay and receive a durable order record.

---

## Phase 7 — Fulfillment, QC, shipping

### Objective

Make real-world manufacturing operations manageable without pretending automation.

### Prerequisites

- Paid orders.

### Tasks

- Admin order queue.
- Partner assignment.
- Work-order reference.
- Status state machine.
- Status history.
- Manufacturing/assembly/QC states.
- QC notes.
- Packing/shipping.
- Tracking number/provider.
- Buyer order timeline.
- Major status emails.
- Failure/rework notes.
- Cancellation/refund hooks.

### Deliverables

- Admin can fulfill an order from payment to delivery.
- Buyer can track status.

### Verification checklist

- [ ] Invalid status transitions rejected.
- [ ] History records actor/time.
- [ ] Buyer cannot alter status.
- [ ] Creator cannot see buyer shipping address.
- [ ] Tracking is real data, never fabricated.
- [ ] Failed fulfillment can enter recovery/refund path.

### Exit criteria

A pilot order can be operationally completed without direct database edits.

---

## Phase 8 — Royalty ledger, refunds, payouts

### Objective

Implement transparent creator economics.

### Prerequisites

- Paid/completed order flow.

### Tasks

- Royalty policy module.
- Per-order-line royalty snapshot.
- Pending/eligible logic.
- Refund reversal.
- Partial refund allocation policy.
- Creator earnings dashboard.
- Ledger views.
- Payout request.
- Admin payout approval.
- Manual payout recording for MVP.
- Payout reference/evidence field.
- Reconciliation tests.

### Deliverables

- Creator can see accurate earnings.
- Admin can reconcile and record payouts.

### Verification checklist

- [ ] Royalty math uses minor units.
- [ ] Current royalty rule changes do not alter old orders.
- [ ] Refund reverses appropriate amount.
- [ ] Pending != eligible != paid.
- [ ] Payout cannot exceed eligible balance.
- [ ] Manual adjustment requires reason/audit.

### Exit criteria

Marketplace economics are auditable.

---

## Phase 9 — Verified reviews and trust layer

### Objective

Add marketplace trust using only evidence-backed signals.

### Prerequisites

- Delivered orders.

### Tasks

- Review eligibility.
- Review create/edit policy.
- Product rating aggregates.
- Admin moderation.
- Revision reference on review.
- Verified purchase badge.
- Creator/product trust information.

### Deliverables

- Real verified reviews.

### Verification checklist

- [ ] Non-buyer cannot create verified review.
- [ ] Review unique constraint prevents duplicate abuse.
- [ ] Removed reviews are excluded from aggregate.
- [ ] No seed/fake ratings in production.

### Exit criteria

Marketplace quality has a real feedback loop.

---

## Phase 10 — Security, privacy, accessibility, performance hardening

### Objective

Prepare for real customer and protected-design data.

### Prerequisites

- All core loops complete.

### Tasks

- Full authorization review.
- RLS review.
- Protected storage penetration checks.
- Rate limiting.
- Rich-text sanitization review.
- Security headers.
- Secret scan.
- Dependency audit.
- Payment webhook replay tests.
- Upload/path traversal tests.
- Accessibility audit.
- Keyboard pass.
- Mobile pass.
- performance profiling.
- image optimization.
- database query/index review.
- backup/restore runbook.
- privacy deletion/request flow.
- audit log review.

### Deliverables

- Hardened release candidate.

### Verification checklist

- [ ] No critical auth/IDOR findings.
- [ ] Protected files not public.
- [ ] No secrets in repo/client bundle.
- [ ] Core flows keyboard usable.
- [ ] Mobile checkout works.
- [ ] Storefront performance acceptable.
- [ ] Backup strategy documented.

### Exit criteria

Release candidate is suitable for controlled pilot.

---

## Phase 11 — Production deployment and pilot

### Objective

Launch PCBOD with a controlled number of real products and orders.

### Prerequisites

- Release candidate.
- Real provider accounts.
- Legal/commercial policies.
- Manufacturing partner workflow rehearsed.

### Tasks

- Provision production Supabase.
- Provision production app host.
- Configure domain/DNS.
- Configure production secrets.
- Configure payment webhook.
- Configure transactional email.
- Configure monitoring/error alerts.
- Run production migrations.
- Bootstrap admin.
- Add approved real products.
- Test one low-value end-to-end order.
- Validate operations SOP.
- Publish:
  - Terms;
  - Privacy;
  - Creator agreement;
  - Refund/cancellation policy;
  - Manufacturing tolerance/disclaimer;
  - prohibited products policy.
- Enable supported service geography only.
- Announce pilot.

### Deliverables

- Production PCBOD.
- Rehearsed order fulfillment.
- Monitoring and support path.

### Verification checklist

- [ ] Production auth works.
- [ ] Real payment succeeds.
- [ ] Webhook verified.
- [ ] Order appears once.
- [ ] Protected files remain private.
- [ ] Admin can route order.
- [ ] Buyer gets real status.
- [ ] Royalty ledger reconciles.
- [ ] Error monitoring active.
- [ ] Backup enabled.

### Exit criteria

PCBOD can accept controlled real orders.

---

## Phase 12 — Post-pilot iteration

### Objective

Use real operational data to decide what to automate.

### Tasks

Measure:

- creator submission drop-off;
- approval time;
- manufacturing failure rate;
- order cycle time;
- support volume;
- refund rate;
- royalty reconciliation effort;
- repeat purchase rate;
- most common manual operations.

Prioritize automation only where it removes demonstrated bottlenecks.

Likely next features:

- Gerber parsing/preview;
- automated DFM assistance;
- manufacturer API integration;
- BOM availability/pricing;
- automated payouts;
- manufacturer portal;
- bulk/B2B ordering;
- publishing plugins.

### Exit criteria

Next roadmap is driven by real marketplace behavior rather than speculative complexity.
