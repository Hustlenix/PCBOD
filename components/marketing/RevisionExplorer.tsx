"use client";

import { useState } from "react";

const revisions = [
  { label: "REV 1.0", note: "Initial controller layout", code: "PBM-010" },
  { label: "REV 1.1", note: "Improved sensor protection", code: "PBM-011" },
  { label: "REV 2.0", note: "USB-C and power-stage redesign", code: "PBM-020" },
  { label: "REV 3.2", note: "Compact routing + assembly update", code: "PBM-032" },
];

export function RevisionExplorer() {
  const [index, setIndex] = useState(3);
  const item = revisions[index];
  return (
    <div className="border border-line bg-cream p-5 sm:p-7">
      <div className="grid gap-8 md:grid-cols-[1fr_.8fr] md:items-center">
        <div>
          <label htmlFor="revision" className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-graphite">Explore hardware revisions</label>
          <input id="revision" className="mt-5 w-full accent-[#1f6b50]" type="range" min="0" max="3" step="1" value={index} onChange={(event) => setIndex(Number(event.target.value))} />
          <div className="mt-3 flex justify-between font-mono text-[9px] text-graphite">{revisions.map((r) => <span key={r.label}>{r.label.replace("REV ", "")}</span>)}</div>
        </div>
        <div className="border border-line bg-paper p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-copper">Locked manufacturing snapshot</div>
          <div className="mt-3 text-3xl font-black text-ink">{item.label}</div>
          <div className="mt-2 font-mono text-[11px] text-pcb">BOARD ID: {item.code}</div>
          <p className="mt-4 text-sm leading-6 text-graphite">{item.note}. In the PCBOD model, an order can stay permanently tied to the exact approved revision that produced it.</p>
        </div>
      </div>
    </div>
  );
}
