"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#marketplace", label: "Marketplace concept" },
  { href: "/how-it-works/", label: "How it works" },
  { href: "/for-creators/", label: "For creators" },
  { href: "/about/", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-pcb focus-visible:ring-offset-2 focus-visible:ring-offset-paper" aria-label="PCBOD home">
          <span className="relative font-mono text-xl font-black tracking-[-0.05em] text-ink">PCB<span className="text-pcb">O</span>D<span className="absolute -right-2 top-1 h-1.5 w-1.5 rounded-full border border-copper bg-paper" /></span>
          <span className="hidden border-l border-line pl-3 font-mono text-[9px] font-semibold uppercase leading-tight tracking-[0.16em] text-graphite md:block">Printed circuit boards<br />on demand</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-graphite transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-pcb">{link.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/#creator" className="border border-ink bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-solder focus:outline-none focus-visible:ring-2 focus-visible:ring-pcb focus-visible:ring-offset-2">Become an early creator</Link>
        </div>
        <button className="grid h-11 w-11 place-items-center border border-line lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation menu">
          <span className="font-mono text-lg">{open ? "×" : "≡"}</span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-paper px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-[1400px] gap-1">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="min-h-11 border-b border-line/70 py-3 text-sm font-medium text-ink">{link.label}</Link>)}
            <Link href="/#creator" onClick={() => setOpen(false)} className="mt-3 min-h-11 bg-ink px-4 py-3 text-center text-sm font-semibold text-paper">Become an early creator</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
