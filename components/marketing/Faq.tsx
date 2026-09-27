const faqs = [
  ["What is PCBOD?", "PCBOD is a concept marketplace where electronics creators could publish PCB-based products, buyers order physical variants, and PCBOD coordinates manufacturing and fulfillment."],
  ["Is PCBOD a PCB factory?", "Not necessarily. The initial model can coordinate manufacturing through external production partners rather than requiring PCBOD to own all fabrication equipment."],
  ["Does the buyer receive Gerber files?", "That depends on the creator's distribution mode. A protected commercial listing can keep production files outside the public purchase flow."],
  ["Can creators keep designs private?", "The concept supports protected commercial designs so customers can buy the physical product without the manufacturing package being publicly distributed."],
  ["What can creators sell?", "The immediate focus is PCB-based electronics products, with bare PCB, assembled PCB, and kit variants where appropriate."],
  ["Is PCBOD live today?", "No. PCBOD is currently being developed as a startup concept and prototype. This website visualizes the intended product and operating model."],
];

export function Faq() {
  return <div className="divide-y divide-line border-y border-line">{faqs.map(([q, a]) => <details key={q} className="group py-1"><summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-pcb"><span>{q}</span><span className="font-mono text-pcb transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pb-5 pr-10 text-sm leading-6 text-graphite">{a}</p></details>)}</div>;
}
