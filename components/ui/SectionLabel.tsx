export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-pcb">
      <span className="h-px w-8 bg-copper" aria-hidden="true" />
      {children}
    </div>
  );
}
