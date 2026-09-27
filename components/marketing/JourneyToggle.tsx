"use client";

import { useState } from "react";

const journeys = {
  creator: ["Create a PCB", "Package production files", "Submit for review", "Publish listing", "Order is manufactured", "Royalty is recorded"],
  buyer: ["Discover hardware", "Compare variants", "Place an order", "PCBOD coordinates production", "QC + shipping", "Receive the physical product"],
};

export function JourneyToggle() {
  const [mode, setMode] = useState<keyof typeof journeys>("creator");
  return (
    <div className="border border-line bg-cream p-4 sm:p-6">
      <div className="mb-6 flex w-fit border border-line bg-paper p-1" role="group" aria-label="Choose journey">
        {(["creator", "buyer"] as const).map((item) => (
          <button key={item} onClick={() => setMode(item)} className={`min-h-11 px-4 text-sm font-semibold capitalize ${mode === item ? "bg-solder text-white" : "text-graphite hover:text-ink"}`} aria-pressed={mode === item}>{item}</button>
        ))}
      </div>
      <ol className="grid gap-3 md:grid-cols-3">
        {journeys[mode].map((step, index) => (
          <li key={step} className="border border-line bg-paper p-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">STEP {index + 1}</div>
            <div className="mt-2 font-semibold text-ink">{step}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
