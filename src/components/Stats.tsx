const STATS_DATA = [
  { value: "10+", label: "Admin Tidur Nyenyak", color: "#C4FF35" },
  { value: "500+", label: "Staff Semangat", color: "#56B2E5" },
  { value: "10+", label: "Klien Terbantu", color: "#BBF6E2" },
  { value: "10+", label: "Proyek Selesai", color: "#FFD7F1" },
];

export default function Stats() {
  return (
    <section
      id="stats"
      aria-label="Statistik Penggunaan"
      style={{
        padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {STATS_DATA.map((s) => (
          <div
            key={s.label}
            style={{
              background: "#141414",
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: s.color,
                lineHeight: 1,
                marginBottom: "0.75rem",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.02em",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
