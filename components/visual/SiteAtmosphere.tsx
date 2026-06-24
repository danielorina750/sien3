export function SiteAtmosphere() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-[var(--sien-ink)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,232,69,0.14),transparent_28%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.06),transparent_30%)]" />
      <div className="noise-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,43,33,0.1),rgba(6,43,33,0.96))]" />
    </div>
  );
}
