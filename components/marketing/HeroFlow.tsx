const steps = ["Design", "Publish", "Order", "Manufacture", "Deliver", "Earn"];

export function HeroFlow() {
  return (
    <div className="relative overflow-hidden border border-line bg-cream p-4 shadow-technical sm:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-line pb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-graphite">
        <span>PCBOD / SYSTEM FLOW</span><span>CONCEPT UI · REV A</span>
      </div>
      <div className="grid gap-3 md:grid-cols-6">
        {steps.map((step, index) => (
          <div key={step} className="relative border border-line bg-paper p-4 md:min-h-36">
            <div className="font-mono text-[10px] text-copper">0{index + 1}</div>
            <div className="mt-7 text-sm font-bold uppercase tracking-[0.08em] text-ink">{step}</div>
            <div className="mt-2 h-px w-10 bg-pcb" />
            {index < steps.length - 1 && <span className="absolute -bottom-[13px] left-1/2 text-copper md:-right-[12px] md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2">→</span>}
          </div>
        ))}
      </div>
      <svg className="pointer-events-none absolute -right-16 -top-20 h-60 w-60 opacity-[0.08]" viewBox="0 0 200 200" aria-hidden="true">
        <path d="M20 40h55v30h45v35h55M40 180v-55h45V95h55V50" fill="none" stroke="#1f6b50" strokeWidth="3" />
        {[30,70,110,150].map((n) => <circle key={n} cx={n} cy={n/2+30} r="5" fill="none" stroke="#a86f39" strokeWidth="2" />)}
      </svg>
    </div>
  );
}
