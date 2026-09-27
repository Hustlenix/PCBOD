export function ConceptBadge({ children = "Concept example" }: { children?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center border border-copper/50 bg-copper/10 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6c431e]">
      {children}
    </span>
  );
}
