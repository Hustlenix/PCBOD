import type { ConceptProduct } from "@/data/concept-products";

const accentClass: Record<ConceptProduct["accent"], string> = {
  green: "from-solder to-[#0a2f26]",
  copper: "from-[#704827] to-[#2d2118]",
  cream: "from-[#4f5f54] to-[#243229]",
};

export function PcbBoard({ product, compact = false }: { product: ConceptProduct; compact?: boolean }) {
  const vias = [
    [12, 16], [25, 22], [44, 15], [63, 24], [79, 16], [18, 67], [38, 74], [60, 68], [83, 76],
  ];
  return (
    <div className={`pcb-board relative overflow-hidden border border-white/15 bg-gradient-to-br ${accentClass[product.accent]} ${compact ? "aspect-[4/3]" : "min-h-[360px]"}`}>
      <div className="absolute inset-3 border border-white/15" aria-hidden="true" />
      {vias.map(([x, y], i) => (
        <span key={i} className="absolute h-3 w-3 rounded-full border border-[#d5a568]/80 bg-[#18221d] shadow-[inset_0_0_0_2px_rgba(213,165,104,.22)]" style={{ left: `${x}%`, top: `${y}%` }} aria-hidden="true" />
      ))}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-80" aria-hidden="true">
        <g fill="none" stroke="#d1a15f" strokeWidth="0.8" strokeLinecap="square">
          <path d="M12 18 H30 V35 H49 V52 H72 V66 H87" />
          <path d="M14 69 H29 V58 H42 V77 H61 V69 H82" />
          <path d="M44 17 V27 H64 V39 H82" />
          <path d="M23 24 V42 H15 V55 H33" />
        </g>
        <g fill="#d1a15f" opacity="0.9">
          <rect x="35" y="38" width="30" height="24" rx="1" />
          <rect x="8" y="43" width="12" height="14" rx="1" />
          <rect x="78" y="41" width="14" height="18" rx="1" />
        </g>
        <g fill="#13241c">
          <rect x="38" y="41" width="24" height="18" rx="1" />
          <rect x="10" y="45" width="8" height="10" rx="1" />
          <rect x="80" y="43" width="10" height="14" rx="1" />
        </g>
        {Array.from({ length: 9 }).map((_, i) => <rect key={i} x={38 + i * 2.75} y="36" width="1.2" height="4" fill="#d1a15f" />)}
        {Array.from({ length: 9 }).map((_, i) => <rect key={i} x={38 + i * 2.75} y="60" width="1.2" height="4" fill="#d1a15f" />)}
      </svg>
      <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">{product.boardCode}</div>
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">PCBOD CONCEPT BOARD</div>
          <div className="mt-1 text-lg font-semibold text-white">{product.name}</div>
        </div>
        <span className="border border-white/30 px-2 py-1 font-mono text-[10px] text-white/80">{product.revision}</span>
      </div>
    </div>
  );
}
