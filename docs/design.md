# PCBOD — Design System and UX Direction

## Design objective

PCBOD must feel like a credible intersection of:

- professional electronics tooling;
- modern technical ecommerce;
- creator marketplace;
- manufacturing operations software.

It must not look like a generic AI-generated SaaS landing page.

## Brand personality

PCBOD is:

- precise;
- engineered;
- useful;
- transparent;
- creator-first;
- industrial without being intimidating;
- technical without becoming visually noisy.

PCBOD is not:

- cyberpunk;
- crypto-like;
- playful toy ecommerce;
- luxury minimalism;
- neon sci-fi;
- generic blue-gradient SaaS.

## Core visual concept

Use the visual language of a **PCB fabrication document + engineering catalog**.

References to PCB traces, drill grids, coordinate systems, silkscreen labels, measurement ticks, board outlines, and revision stamps may appear as structural motifs.

These motifs MUST support hierarchy and identity rather than becoming decorative clutter.

## Primary design principles

### 1. Evidence over hype

Hardware buyers need:

- specs;
- revision;
- compatibility;
- dimensions;
- included items;
- lead time;
- documentation;
- reviews.

These take priority over marketing slogans.

### 2. Marketplace first

Product imagery, title, creator, variant, price, and use case must dominate product cards/pages.

### 3. Manufacturing transparency

The interface should clearly show:

- product revision;
- fulfillment stage;
- what is protected;
- what the buyer receives;
- estimated lead time;
- whether a product is bare, assembled, or a kit.

### 4. Creator ownership

Creator attribution must be visible on product cards and product pages.

### 5. Dense where useful, calm where commercial

- Public marketplace: breathable and visual.
- Creator/admin tools: denser, information-forward.

## Color system

Use semantic roles rather than arbitrary colors.

Recommended default light theme:

- **Canvas**: warm off-white, close to technical paper.
- **Primary text**: near-black graphite.
- **Secondary text**: muted graphite.
- **Surface**: white or slightly warmer elevated paper.
- **Border**: cool/neutral gray.
- **Brand accent**: soldermask-inspired deep green.
- **Interactive accent**: brighter but controlled PCB green.
- **Technical secondary accent**: muted copper/brass tone used sparingly.
- **Info**: cool blue.
- **Success**: green distinct from brand by lightness.
- **Warning**: amber.
- **Danger**: red.

Do not use a rainbow palette.

Dark theme is optional for MVP. If added, it must be fully designed, not an automatic inversion.

## Typography

Use two families at most.

### Primary sans

A highly legible grotesk/neo-grotesk suitable for ecommerce and dashboards.

Use for:

- navigation;
- body;
- controls;
- product copy.

### Technical mono

A readable monospaced font used selectively for:

- SKU;
- revision;
- dimensions;
- Gerber/file metadata;
- order IDs;
- status timestamps;
- engineering labels.

Do not set entire pages in monospace.

## Type scale

Suggested hierarchy:

- Display: 48–64 desktop / 36–44 mobile.
- H1: 36–48.
- H2: 28–36.
- H3: 20–24.
- Body: 15–17.
- Small/meta: 12–14.
- Technical labels: 11–13 uppercase or mono when appropriate.

Avoid oversized 80–120px startup hero typography.

## Layout system

### Public

- max content width around 1280–1440 px;
- 12-column desktop grid;
- 24–32 px desktop gutters;
- 16–20 px mobile gutters;
- product grids adapt 1 -> 2 -> 3/4 columns.

### Dashboard

- persistent desktop sidebar;
- compact top bar;
- mobile drawer navigation;
- content width optimized for tables/forms rather than centered marketing prose.

## Spacing

Use a 4px base unit.

Common values:

- 4;
- 8;
- 12;
- 16;
- 24;
- 32;
- 48;
- 64;
- 96.

Avoid arbitrary one-off spacing.

## Corners

Use restrained radii.

- Controls: ~6–8px.
- Cards: ~8–12px.
- Pills only for chips/tags/statuses.
- Avoid 24–40px rounded rectangles everywhere.

## Borders and shadows

PCBOD should rely more on:

- hairline borders;
- surface contrast;
- section spacing;
- inset technical dividers.

Shadows:

- very light;
- used for overlays or genuine elevation;
- never large diffuse glow effects.

## Iconography

Use a consistent line icon set.

Prefer icons for:

- search;
- cart;
- upload;
- revision/history;
- file;
- package;
- truck;
- shield/private;
- check/QC;
- creator;
- board/chip;
- documentation.

Do not mix emoji into core product UI.

## Imagery

### Marketplace imagery

Priority:

1. real product photography;
2. honest CAD/board renders supplied by creator;
3. diagrams/documentation;
4. clearly labeled conceptual illustration.

Never fabricate a realistic product photo and present it as the actual PCB.

### Marketing illustration

Use simplified technical board diagrams, fabrication layers, traces, and creator-to-factory flow diagrams.

## Navigation

### Public desktop header

Left:
- PCBOD wordmark.

Center:
- Marketplace;
- Categories;
- How it works;
- Sell on PCBOD.

Right:
- Search;
- Orders/account when signed in;
- Sign in when signed out;
- Cart.

### Mobile

- compact wordmark;
- search;
- cart;
- menu drawer.

### Creator Studio

Sidebar:

- Overview
- Products
- Revisions
- Orders / Sales
- Royalties
- Payouts
- Profile

### Admin

Sidebar:

- Overview
- Review queue
- Products
- Orders
- Partners
- Royalties
- Payouts
- Users
- Audit

## Route/screen inventory

Public:

- `/`
- `/marketplace`
- `/search`
- `/product/[slug]`
- `/creator/[handle]`
- `/how-it-works`
- `/sell`
- `/about`
- legal pages

Auth:

- `/sign-in`
- `/sign-up`

Buyer:

- `/account`
- `/orders`
- `/orders/[orderId]`
- `/cart`
- `/checkout`

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

## Home page structure

### 1. Utility header

Navigation + search/cart/auth.

### 2. Hero

Headline should describe the transaction clearly.

Recommended direction:

**Publish hardware. We manufacture every order.**

Supporting copy:

Designers list production-ready PCB products. Buyers order them. PCBOD handles manufacturing and fulfillment while creators earn royalties.

Primary CTA:
- Explore hardware

Secondary CTA:
- Publish a design

Hero visual:
- a clean creator -> PCBOD -> fabrication -> buyer flow using real interface/product visuals;
- no floating gradient orb.

### 3. Featured products

Real approved listings only.

### 4. Category strip

Examples:

- Robotics
- IoT
- Power
- Sensors
- Audio
- Development boards
- Automation
- Education

Categories must come from real catalog configuration.

### 5. How it works

Creator:
Upload -> Review -> Publish -> Earn.

Buyer:
Discover -> Order -> Manufactured -> Delivered.

### 6. Why PCBOD

- No creator inventory.
- Protected manufacturing files.
- Revision-traceable builds.
- Bare/assembled/kit options where available.

### 7. Creator CTA

Explain the creator economics without making income promises.

### 8. Footer

Marketplace, creator, company, support, legal.

## Marketplace page

Desktop:

- search bar;
- category/tags;
- filters left or top;
- sort;
- product count;
- grid.

Product card hierarchy:

1. product image;
2. title;
3. one-line use case;
4. creator;
5. variant availability chips;
6. price from;
7. verified rating only if real;
8. lead time if configured.

Do not overload card with full specs.

## Product detail page

Desktop structure:

```text
Breadcrumbs

[Media gallery 55%] [Purchase panel 45%]

Title
Creator
Short use case
Revision
Rating
Variant selector
Price
Lead time
Quantity
Buy/Add to cart

Below:
Overview
Technical specs
What's included
Compatibility
Documentation
Revision history
Reviews
Creator/support
```

Mobile:

- media;
- title/creator;
- variant/price;
- CTA;
- sections;
- optional sticky bottom purchase CTA that does not obscure content.

### Purchase panel rules

Must show:

- variant type;
- quantity;
- unit price;
- lead-time estimate;
- what is included;
- revision;
- availability/sellability;
- shipping calculated at checkout where applicable.

## Creator product editor

Use a step/section model without forcing a fragile wizard.

Sections:

1. Basics
2. Media
3. Technical specs
4. Licensing/distribution
5. Buyer documentation
6. Revisions
7. Commercial status

Autosave status visible.

Do not mix approved revision files with editable marketing copy.

## Revision screen

This is a technical screen.

Show:

- revision label;
- status;
- changelog;
- file checklist;
- checksums;
- upload status;
- submission time;
- admin review notes;
- immutable/locked indicator when approved.

Protected files use a lock icon + clear explanation.

## Admin review screen

Two-column desktop layout:

Left:
- creator submission;
- specs;
- media;
- documents;
- revision files.

Right:
- review controls;
- manufacturing cost;
- sell price;
- royalty;
- lead time;
- partner notes;
- approve/change-request/reject.

Every decision requires explicit confirmation.

## Order detail page

Show a vertical timeline:

- Paid
- Queued
- Manufacturing
- Assembly
- Quality check
- Packed
- Shipped
- Delivered

Only stages relevant to that variant should appear.

Include:

- product;
- purchased revision;
- quantity;
- financial summary;
- address;
- tracking;
- support action.

Do not show internal manufacturing cost or creator royalty to buyer.

## Creator royalty dashboard

Cards:

- Pending royalties
- Eligible royalties
- Paid royalties
- Lifetime product sales

Chart only if real data exists.

Ledger table:

- date;
- order/product;
- type;
- status;
- amount.

Add explanatory copy distinguishing gross sales and creator earnings.

## Admin operations dashboard

Prioritize exceptions, not vanity metrics.

Queues:

- revisions awaiting review;
- paid orders awaiting routing;
- orders exceeding lead time;
- QC failures;
- refund actions;
- payout requests.

## Component states

Every interactive component must define:

- default;
- hover;
- focus-visible;
- active;
- disabled;
- loading;
- validation/error when relevant.

### Status chips

Use text + color.

Examples:

- Draft
- In review
- Approved
- Manufacturing
- Quality check
- Shipped
- Delivered
- Refunded

Do not encode status only by red/green.

## Forms

- Label above control.
- Short helper text only where needed.
- Required state explicit.
- Inline field error.
- Summary error on long forms.
- Preserve valid user input after failure.
- Destructive actions separate from normal save actions.
- Money fields display currency clearly.
- File uploads show allowed formats/size before upload.

## File upload UI

Each file row:

- filename;
- category;
- size;
- status;
- visibility;
- checksum after processing if useful;
- replace/remove when draft only.

Protected file section includes:

**Private manufacturing files — never shown to buyers unless you explicitly publish them under an open distribution mode.**

No fake scanning/progress animations.

## Empty states

Examples:

Creator has no products:

**No products yet**
Create your first PCB product draft. It stays private until you submit and publish it.

Buyer has no orders:

**No orders yet**
Browse the marketplace to find creator-designed hardware.

Marketplace has no result:

**No matching hardware**
Remove a filter or search by use case, board type, or creator.

## Loading states

- Product grid: skeleton card geometry.
- Table: row skeletons.
- Upload: real progress when available.
- Checkout: explicit processing state.
- Admin mutations: disable repeated action while pending.

## Error states

Errors should include:

- what failed;
- whether data was saved;
- next safe action.

Example:

**Upload failed**
`controller-v3-gerbers.zip` was not saved. Check the file size and try again.

## Motion

Motion should communicate cause/effect.

Allowed:

- 120–220ms hover/focus transitions;
- dialog/drawer entrance;
- status timeline update;
- subtle product card image transition;
- upload progress.

Avoid:

- looping decorative animations;
- parallax;
- floating PCB elements;
- cursor effects;
- excessive scroll reveal.

Respect reduced motion.

## PCB visual motif

Allowed sparingly:

- 1px trace lines connecting steps;
- via/drill dot grid as section divider;
- silkscreen-like labels such as `REV A`, `PCBOD VERIFIED REVIEW`;
- coordinate labels in technical dashboards;
- board-outline framing.

Do not make text difficult to read for the sake of the motif.

## Trust and disclosure design

Use clearly labeled trust signals:

- Verified purchase
- Approved revision
- Protected design
- Open design
- Revision ID
- Fulfilled by PCBOD/partner wording only when operationally true.

Do not use vague badges such as "Certified" without a defined certification.

## Accessibility

- Minimum practical body text 15–16px.
- Strong focus rings.
- Color contrast checked.
- Product gallery keyboard operable.
- Selectors usable without pointer.
- Tables have headers/captions where required.
- Status timeline is accessible as ordered semantic content.
- Upload dropzone has button/input alternative.
- Icon-only controls have labels.
- Reduced motion honored.

## Anti-patterns to avoid

- fake command-line text in hero;
- giant gradient headline;
- five identical feature cards with generic icons;
- glowing green PCB everywhere;
- overusing glass;
- extremely rounded cards;
- dark cyberpunk by default;
- decorative oscilloscope graphs;
- fake manufacturing statistics;
- fake "live orders";
- AI-generated fake customer headshots;
- product renders pretending to be photography;
- endless dashboard charts before there is meaningful data.

## Final visual test

A screenshot without the logo should still feel like:

> a professional hardware marketplace built by people who understand electronics and manufacturing,

not:

> a generic startup template with PCB words inserted.
