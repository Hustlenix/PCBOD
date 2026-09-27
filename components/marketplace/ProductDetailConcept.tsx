"use client";

import { useMemo, useState } from "react";
import { conceptProducts } from "@/data/concept-products";
import { ConceptBadge } from "@/components/ui/ConceptBadge";
import { PcbBoard } from "@/components/pcb/PcbBoard";

export function ProductDetailConcept() {
  const product = conceptProducts[0];
  const [variantIndex, setVariantIndex] = useState(1);
  const variant = useMemo(() => product.variants[variantIndex], [product, variantIndex]);
  return (
    <div className="grid border border-line bg-cream lg:grid-cols-[1.1fr_.9fr]">
      <div className="border-b border-line p-4 lg:border-b-0 lg:border-r sm:p-6"><PcbBoard product={product} /></div>
      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3"><ConceptBadge /><span className="font-mono text-[10px] text-graphite">{product.revision} · {product.boardCode}</span></div>
        <h3 className="mt-5 text-3xl font-black tracking-tight text-ink">{product.name}</h3>
        <p className="mt-1 text-sm font-semibold text-pcb">Designed by {product.creator}</p>
        <p className="mt-4 text-sm leading-6 text-graphite">{product.useCase}</p>
        <dl className="mt-6 grid grid-cols-2 border-y border-line">
          {product.specs.map((spec) => <div key={spec.label} className="border-b border-line p-3 odd:border-r last:border-b-0"><dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-graphite">{spec.label}</dt><dd className="mt-1 text-sm font-semibold text-ink">{spec.value}</dd></div>)}
        </dl>
        <fieldset className="mt-6">
          <legend className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink">Choose a concept variant</legend>
          <div className="mt-3 grid gap-2">
            {product.variants.map((item, index) => (
              <button type="button" key={item.name} onClick={() => setVariantIndex(index)} className={`flex min-h-14 items-center justify-between border px-4 text-left transition ${variantIndex === index ? "border-solder bg-solder text-white" : "border-line bg-paper text-ink hover:border-graphite"}`} aria-pressed={variantIndex === index}>
                <span><span className="block text-sm font-semibold">{item.name}</span><span className={`mt-1 block text-[11px] ${variantIndex === index ? "text-white/70" : "text-graphite"}`}>{item.includes}</span></span><span className="font-mono text-sm font-bold">{item.priceLabel}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <button type="button" onClick={() => document.getElementById("manufacturing")?.scrollIntoView({ behavior: "smooth" })} className="mt-6 min-h-12 w-full bg-ink px-4 py-3 text-sm font-bold text-paper hover:bg-solder focus:outline-none focus-visible:ring-2 focus-visible:ring-pcb focus-visible:ring-offset-2">See how ordering would work</button>
        <p className="mt-3 text-xs leading-5 text-graphite">Illustrative interface only. No purchase is performed and these products are not presented as live inventory.</p>
      </div>
    </div>
  );
}
