import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { JourneyToggle } from "@/components/marketing/JourneyToggle";

export const metadata: Metadata = { title: "How it works", description: "See the conceptual PCBOD flow from creator submission to manufacturing, delivery and royalty recording." };

export default function HowItWorksPage() {
  return <main className="technical-grid"><div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><SectionLabel>How it works</SectionLabel><h1 className="max-w-4xl text-5xl font-black tracking-[-0.05em] text-ink sm:text-6xl">One marketplace loop, two clear journeys.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">PCBOD is designed to connect a creator’s approved manufacturing revision with a buyer’s order and a controlled fulfillment flow. The concept is intentionally operationally honest: external manufacturing partners can be coordinated manually before deeper automation exists.</p><div className="mt-10"><JourneyToggle /></div><div className="mt-16 grid gap-4 md:grid-cols-3">{[["1. APPROVE","A creator submits a production-ready revision. Admin review validates the package and commercial configuration before it becomes sellable."],["2. ORDER","A buyer chooses a physical variant. The paid order snapshots the exact revision and commercial terms."],["3. FULFILL","PCBOD coordinates fabrication, optional assembly, quality checks, shipping and the creator royalty record."]].map(([h,p])=><section key={h} className="border border-line bg-cream p-6"><div className="font-mono text-[10px] font-bold text-copper">{h}</div><p className="mt-5 text-sm leading-6 text-graphite">{p}</p></section>)}</div></div></main>;
}
