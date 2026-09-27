import type { ConceptProduct } from "@/data/concept-products";
import { ConceptBadge } from "@/components/ui/ConceptBadge";
import { PcbBoard } from "@/components/pcb/PcbBoard";

export function ProductCard({ product }: { product: ConceptProduct }) {
  return (
    <article className="group border border-line bg-cream transition hover:-translate-y-1 hover:shadow-technical">
      <PcbBoard product={product} compact />
      <div className="p-5">
        <div className="flex items-center justify-between gap-3"><ConceptBadge /><span className="font-mono text-[10px] text-graphite">{product.revision}</span></div>
        <h3 className="mt-4 text-xl font-bold text-ink">{product.name}</h3>
        <p className="mt-1 text-xs font-medium text-pcb">{product.creator}</p>
        <p className="mt-3 min-h-12 text-sm leading-6 text-graphite">{product.useCase}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.highlights.slice(0, 3).map((item) => <span key={item} className="border border-line bg-paper px-2 py-1 font-mono text-[10px] text-graphite">{item}</span>)}
        </div>
        <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
          <div><div className="font-mono text-[9px] uppercase tracking-[0.14em] text-graphite">Example from</div><div className="mt-1 text-lg font-bold text-ink">{product.variants[0].priceLabel}</div></div>
          <span className="text-xs font-semibold text-pcb">Explore concept →</span>
        </div>
      </div>
    </article>
  );
}
