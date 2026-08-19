import { useState } from "react";

const FEATURES = [
  {
    color: "#56B2E5",
    tag: "01 — Absensi",
    title: "Deteksi Wajah & Lokasi",
    body: "Tidak ada lagi drama titip absensi. Ajukan izin apabila tidak bisa melakukan absensi.",
  },
  {
    color: "#FFD7F1",
    tag: "02 — Kelola Tugas",
    title: "Laporkan & Edit Tugas",
    body: "Laporkan tugas dan lampirkan foto tugas harian atau laporan lapangan langsung dari aplikasi.",
  },
  {
    color: "#BBF6E2",
    tag: "03 — Komplain Klien",
    title: "Pantau Komplain Klien",
    body: "Klien anda dapat mengirimkan komplain melalui dashboard klien.",
  },
  {
    color: "#C4FF35",
    tag: "04 — Administrasi",
    title: "Laporan Administrasi",
    body: "Kelola laporan dari dashboard admin dan staff. Tersedia dalam format excel.",
  },
];

function FeatureCard({
  color,
  tag,
  title,
  body,
}: (typeof FEATURES)[0]) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.04)" : "#141414",
        padding: "clamp(1.5rem, 3vw, 2.5rem)",
        transition: "background 0.25s",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color,
        }}
      >
        {tag}
      </div>
      <h3
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 800,
          fontSize: "1.1rem",
          letterSpacing: "-0.02em",
          color: "#fff",
          lineHeight: 1.35,
          margin: 0,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.5)",
          margin: 0,
          flexGrow: 1,
        }}
      >
        {body}
      </p>
    </article>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      style={{
        padding:
          "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Fitur Unggulan
        </span>
        <h2
          id="features-title"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.03em",
            color: "#fff",
            margin: "0.75rem 0 0",
          }}
        >
          Kebutuhan Presensi & Kelola Tim Lebih Simpel.
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {FEATURES.map((f) => (
          <FeatureCard key={f.tag} {...f} />
        ))}
      </div>
    </section>
  );
}
