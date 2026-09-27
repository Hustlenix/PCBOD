import Link from "next/link";
import { HeroFlow } from "@/components/marketing/HeroFlow";
import { JourneyToggle } from "@/components/marketing/JourneyToggle";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { ProductDetailConcept } from "@/components/marketplace/ProductDetailConcept";
import { RevisionExplorer } from "@/components/marketing/RevisionExplorer";
import { Faq } from "@/components/marketing/Faq";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ConceptBadge } from "@/components/ui/ConceptBadge";
import { conceptProducts } from "@/data/concept-products";

const currentWay = ["Find factory", "Negotiate MOQ", "Pay upfront", "Hold inventory", "Build storefront", "Pack + ship", "Handle revisions"];
const pcbodWay = ["Design", "Publish", "Buyer orders", "Manufacture", "QC + ship", "Creator royalty"];
const manufacturing = ["Order received", "Files locked to revision", "Fabrication", "Assembly", "Quality check", "Pack", "Ship"];

export default function HomePage() {
  return (
    <main>
      <section className="technical-grid border-b border-line">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 border border-line bg-cream px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-graphite"><span className="h-2 w-2 rounded-full bg-signal" /> Startup concept / prototype</div>
            <h1 className="max-w-3xl text-5xl font-black leading-[.96] tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl">Publish hardware <span className="text-pcb">like software.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">PCBOD lets electronics creators publish PCB designs as physical products. When somebody orders, manufacturing begins—without the creator holding inventory.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#how" className="min-h-12 bg-ink px-5 py-3 text-center text-sm font-bold text-paper transition hover:bg-solder focus:outline-none focus-visible:ring-2 focus-visible:ring-pcb focus-visible:ring-offset-2">See how it works</a>
              <Link href="/for-creators/" className="min-h-12 border border-ink px-5 py-3 text-center text-sm font-bold text-ink transition hover:bg-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-pcb">For PCB creators</Link>
            </div>
            <div className="mt-10 grid grid-cols-3 border-y border-line py-4 font-mono text-[10px] uppercase tracking-[0.12em] text-graphite">
              <span>Creator →</span><span>Manufacturing →</span><span>Buyer</span>
            </div>
          </div>
          <HeroFlow />
        </div>
      </section>

      <section id="how" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>01 / Why PCBOD</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-ink sm:text-5xl">Building the board is only half the job.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-graphite">A working prototype can still be difficult to commercialize. Manufacturing coordination, minimum order quantities, inventory, packaging, storefronts and fulfillment turn a design problem into an operations problem.</p>
          </div>
          <div className="border border-line bg-cream p-5 sm:p-6">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-graphite">The current way</div>
            <ol className="mt-5 grid gap-2 sm:grid-cols-2">
              {currentWay.map((item, index) => <li key={item} className="flex min-h-14 items-center gap-3 border border-line bg-paper p-3"><span className="font-mono text-[10px] text-copper">{String(index + 1).padStart(2,"0")}</span><span className="text-sm font-semibold text-ink">{item}</span></li>)}
            </ol>
          </div>
        </div>
        <div className="mt-14 border border-solder bg-solder p-5 text-paper sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5"><div><div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">The PCBOD way</div><h3 className="mt-2 text-2xl font-bold">Design once. Publish once. Manufacture when ordered.</h3></div><span className="font-mono text-[10px] text-white/60">FLOW / CONCEPT</span></div>
          <ol className="mt-6 grid gap-3 md:grid-cols-6">{pcbodWay.map((item, index) => <li key={item} className="relative border border-white/15 bg-white/[.04] p-4"><span className="font-mono text-[9px] text-brass">0{index + 1}</span><div className="mt-5 text-sm font-bold uppercase tracking-[.06em]">{item}</div>{index < pcbodWay.length - 1 && <span className="absolute -bottom-3 left-1/2 text-brass md:-right-3 md:bottom-auto md:left-auto md:top-1/2">→</span>}</li>)}</ol>
        </div>
      </section>

      <section id="marketplace" className="trace-divider border-y border-line bg-[#ebe7dd]">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionLabel>02 / Marketplace concept</SectionLabel>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><h2 className="text-4xl font-black tracking-[-0.04em] text-ink sm:text-5xl">Creator-designed electronics, made tangible.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-graphite">A buyer-facing marketplace could make useful boards easier to discover, understand and order as bare PCBs, assembled boards or kits.</p></div><ConceptBadge>All listings below are concept examples</ConceptBadge></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{conceptProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>03 / Product detail concept</SectionLabel>
        <div className="mb-8 max-w-3xl"><h2 className="text-4xl font-black tracking-[-0.04em] text-ink sm:text-5xl">Evidence before hype.</h2><p className="mt-4 text-base leading-7 text-graphite">A hardware listing should make revision, dimensions, electrical requirements, included items and variant differences obvious before the call to action.</p></div>
        <ProductDetailConcept />
      </section>

      <section id="creator" className="border-y border-line bg-solder text-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionLabel>04 / Creator experience</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div><h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">Turn the manufacturing package into a product.</h2><p className="mt-5 max-w-xl text-base leading-7 text-white/70">The creator flow is designed around a real hardware artifact: production files, documentation, distribution mode, review and immutable revisions—not a generic product upload form.</p><Link href="/for-creators/" className="mt-7 inline-flex min-h-12 items-center border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">Explore the creator concept →</Link></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {["Upload design package","Add product details","Choose distribution","Manufacturing review","Publish approved revision","Earn on eligible orders"].map((step,index)=><div key={step} className="border border-white/15 bg-white/[.035] p-5"><div className="font-mono text-[10px] text-brass">0{index+1}</div><div className="mt-10 text-base font-bold">{step}</div>{index===0&&<div className="mt-4 space-y-1 font-mono text-[9px] text-white/55"><div>gerbers.zip</div><div>BOM.csv</div><div>CPL.csv</div><div>README.md</div></div>}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>05 / Two journeys, one system</SectionLabel>
        <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-ink sm:text-5xl">Built around the creator and the buyer—not the factory dashboard.</h2>
        <div className="mt-9"><JourneyToggle /></div>
      </section>

      <section className="border-y border-line bg-[#ebe7dd]">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <SectionLabel>06 / Protected hardware IP</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-ink sm:text-5xl">Your design does not have to become a download.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-graphite">A protected commercial mode is designed to let customers purchase the physical product while production files stay outside the public purchase flow. It is a product architecture goal—not an absolute security guarantee.</p>
            <p className="mt-5 border-l-2 border-copper pl-4 text-sm font-semibold leading-6 text-ink">Designed to keep protected manufacturing files away from the public purchase flow.</p>
          </div>
          <div className="grid border border-line bg-cream sm:grid-cols-2">
            <div className="border-b border-line p-6 sm:border-b-0 sm:border-r"><div className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-pcb">Buyer receives</div><ul className="mt-5 space-y-3 text-sm text-ink"><li>Product page</li><li>Documentation</li><li>Firmware, when published</li><li>Usage guide</li></ul></div>
            <div className="p-6"><div className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-copper">Protected manufacturing</div><ul className="mt-5 space-y-3 text-sm text-ink"><li>Gerber package</li><li>BOM</li><li>CPL / pick-and-place</li><li>Production notes</li></ul><div className="mt-7 border border-copper/40 bg-copper/10 p-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#6c431e]">Private path → PCBOD + manufacturing partner</div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>07 / Creator economics</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><h2 className="text-4xl font-black tracking-[-0.04em] text-ink sm:text-5xl">A royalty model, without income promises.</h2><p className="mt-5 text-base leading-7 text-graphite">The creator economics can be explicit per product and snapshotted per eligible order, while manufacturing, assembly and logistics remain visible components of the commercial model.</p></div>
          <div className="border border-line bg-cream p-5 sm:p-7"><div className="flex items-center justify-between"><ConceptBadge>Illustrative economics</ConceptBadge><span className="font-mono text-[10px] text-graphite">INR / SAMPLE ONLY</span></div><dl className="mt-6 divide-y divide-line">{[["Customer pays","₹1,499"],["Manufacturing","₹620"],["Assembly","₹220"],["Packaging / logistics","₹140"],["Creator royalty","₹199"],["PCBOD margin","Remainder"]].map(([label,value])=><div key={label} className="flex justify-between gap-6 py-3 text-sm"><dt className="text-graphite">{label}</dt><dd className="font-mono font-semibold text-ink">{value}</dd></div>)}</dl><p className="mt-5 text-xs leading-5 text-graphite">Illustrative example only. Actual economics would depend on product, manufacturing volume, shipping and commercial terms.</p></div>
        </div>
      </section>

      <section id="manufacturing" className="border-y border-line bg-solder text-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionLabel>08 / Manufacturing flow</SectionLabel>
          <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">The order follows the revision, not a vague product name.</h2>
          <div className="mt-9 grid gap-3 md:grid-cols-7">{manufacturing.map((step,index)=><div key={step} className="relative border border-white/15 bg-white/[.035] p-4"><div className="font-mono text-[9px] text-brass">{String(index+1).padStart(2,"0")}</div><div className="mt-7 text-sm font-bold">{step}</div>{index===1&&<div className="mt-3 font-mono text-[9px] leading-5 text-white/55">REV 3.2<br/>BOARD ID: PBM-032<br/>LOT: 000142</div>}</div>)}</div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">Concept workflow — not live production tracking</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>09 / Hardware versioning</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div><h2 className="text-4xl font-black tracking-[-0.04em] text-ink sm:text-5xl">Hardware changes. Orders should remember exactly what shipped.</h2><p className="mt-5 text-base leading-7 text-graphite">PCBOD’s model treats an approved manufacturing revision as immutable. A hardware change creates a new revision instead of silently replacing the files behind an old order.</p></div><RevisionExplorer /></div>
      </section>

      <section className="border-y border-line bg-[#ebe7dd]">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div><SectionLabel>10 / India-first opportunity</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] text-ink sm:text-5xl">Start where the creator density is visible.</h2><p className="mt-5 text-base leading-7 text-graphite">An India-first pilot could focus on engineering students, robotics teams, makers, IoT builders and early hardware startups while keeping the operating model narrow enough to learn quickly.</p></div>
          <div className="grid grid-cols-2 border border-line bg-cream sm:grid-cols-3">{["Engineering colleges","Robotics teams","IoT startups","Makers","Electronics startups","INR pricing"].map((item)=><div key={item} className="min-h-28 border-b border-r border-line p-4"><span className="font-mono text-[9px] uppercase tracking-[.13em] text-copper">Potential focus</span><div className="mt-6 text-sm font-bold text-ink">{item}</div></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>11 / Future vision</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><h2 className="text-4xl font-black tracking-[-0.04em] text-ink sm:text-5xl">Hardware on demand.</h2><p className="mt-5 text-base leading-7 text-graphite">The immediate focus stays PCB manufacturing. The longer-term path can add assembly, firmware flashing, testing and progressively more complete hardware fulfillment only after the core marketplace works.</p></div><div className="grid gap-3 sm:grid-cols-4">{["PCB","PCB + PCBA","+ Flashing + test","Complete hardware"].map((item,index)=><div key={item} className={`${index===3?"bg-solder text-white":"bg-cream text-ink"} border border-line p-5`}><div className="font-mono text-[9px] text-copper">PHASE 0{index+1}</div><div className="mt-12 text-lg font-bold">{item}</div></div>)}</div></div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionLabel>12 / Comparison</SectionLabel>
          <div className="grid border border-line md:grid-cols-2"><div className="border-b border-line p-6 md:border-b-0 md:border-r sm:p-8"><h3 className="text-2xl font-bold text-ink">Traditional creator hardware business</h3><ul className="mt-6 space-y-4 text-sm leading-6 text-graphite">{["Order inventory upfront","Predict demand","Coordinate manufacturing","Hold stock","Package and ship","Track revisions manually"].map(x=><li key={x} className="border-b border-line pb-3">{x}</li>)}</ul></div><div className="p-6 sm:p-8"><h3 className="text-2xl font-bold text-ink">PCBOD concept</h3><ul className="mt-6 space-y-4 text-sm leading-6 text-graphite">{["Submit approved manufacturing package","Publish a product listing","Manufacture after an order","Revision-traceable hardware","Creator royalty ledger","Fulfillment coordinated through PCBOD"].map(x=><li key={x} className="border-b border-line pb-3">{x}</li>)}</ul></div></div>
          <p className="mt-4 text-xs leading-5 text-graphite">This comparison describes two operating models; it does not claim traditional manufacturing is always inferior.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><SectionLabel>13 / FAQ</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] text-ink sm:text-5xl">Clear answers, no fake production claims.</h2><div className="mt-8"><Faq /></div></section>

      <section className="technical-grid border-t border-line bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="max-w-4xl"><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brass">PCBOD / NEXT</div><h2 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-6xl">Your PCB could be more than a project file.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">PCBOD is exploring a marketplace where hardware creators publish once and manufacture on demand.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/for-creators/" className="min-h-12 bg-paper px-5 py-3 text-center text-sm font-bold text-ink hover:bg-white">Become an early creator</Link><Link href="/about/" className="min-h-12 border border-white/30 px-5 py-3 text-center text-sm font-bold text-white hover:bg-white/10">Read the concept</Link></div><p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">This site does not collect submissions or process orders.</p></div></div>
      </section>
    </main>
  );
}
