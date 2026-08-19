const STEPS = [
  {
    num: "01",
    color: "#C4FF35",
    title: "Pemesanan",
    body: "Kami akan menyiapkan server dan aplikasi sesuai kebutuhan perusahaan Anda dengan harga yang terjangkau",
  },
  {
    num: "02",
    color: "#56B2E5",
    title: "Persiapan Admin",
    body: "Akun admin diberikan kemudian mengatur unit kerja, lokasi, jabatan, shift dan sebagainya",
  },
  {
    num: "03",
    color: "#FFD7F1",
    title: "Pendaftaran Staff",
    body: "Staff dapat mendaftar dan memilih unit kerjanya masing-masing",
  },
  {
    num: "04",
    color: "#BBF6E2",
    title: "Absensi dan Laporan",
    body: "Aplikasi siap digunakan untuk absensi dan pelaporan",
  },
];

export default function Compatibility() {
  return (
    <section
      id="kompatibilitas"
      aria-labelledby="compatibility-title"
      style={{
        padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
        background: "#0e0e0e",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            Kompatibilitas
          </span>
          <h2
            id="compatibility-title"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              letterSpacing: "-0.03em",
              color: "#fff",
              margin: "0.75rem 0 0",
            }}
          >
            Berbasis website, kompatibel di berbagai perangkat.
          </h2>
        </div>

        <ol
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(1rem, 2vw, 1.5rem)",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {STEPS.map((s) => (
            <li
              key={s.num}
              style={{
                position: "relative",
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "6px",
                padding: "clamp(1.5rem, 3vw, 2rem)",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 800,
                  fontSize: "2.2rem",
                  color: s.color,
                  lineHeight: 1,
                  marginBottom: "1.25rem",
                  opacity: 0.7,
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "#fff",
                  margin: "0 0 0.75rem",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.45)",
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
