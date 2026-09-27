import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#e9e5db]">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <div className="font-mono text-2xl font-black tracking-[-0.05em] text-ink">PCB<span className="text-pcb">O</span>D</div>
          <p className="mt-3 max-w-md text-sm leading-6 text-graphite">A startup concept for publishing creator-designed PCB products and coordinating manufacturing on demand.</p>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-graphite">Concept / prototype — not a live marketplace</p>
        </div>
        <div>
          <div className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink">Explore</div>
          <div className="mt-4 grid gap-3 text-sm text-graphite">
            <Link href="/#marketplace">Marketplace concept</Link><Link href="/how-it-works/">How it works</Link><Link href="/for-creators/">For creators</Link><Link href="/about/">About</Link>
          </div>
        </div>
        <div>
          <div className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink">Status</div>
          <p className="mt-4 text-sm leading-6 text-graphite">PCBOD is currently being developed as a startup concept and prototype. Operational marketplace features shown here are illustrative unless explicitly implemented.</p>
        </div>
      </div>
    </footer>
  );
}
