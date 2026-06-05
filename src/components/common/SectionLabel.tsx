export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-velox-gold font-mono-ui text-xs">
      <span className="h-px w-8 bg-velox-gold/60" />
      <span>{children}</span>
      <span className="h-px w-8 bg-velox-gold/60" />
    </div>
  );
}
