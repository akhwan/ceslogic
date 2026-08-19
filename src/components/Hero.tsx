export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      style={{
        minHeight: "100vh",
        padding:
          "clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 6rem)",
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(2rem, 5vw, 5rem)",
        alignItems: "center",
      }}
      className="hero-grid"
    >
      {/* Left */}
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(196,255,53,0.1)",
            border: "1px solid rgba(196,255,53,0.3)",
            borderRadius: "3px",
            padding: "0.35rem 0.75rem",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#C4FF35",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C4FF35",
            }}
          >
            Now Live — v3.0.0
          </span>
        </div>

        <h1
          id="hero-title"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 800,
            fontSize: "clamp(1.4rem, 4.5vw, 3.2rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#fff",
            margin: "0 0 1.5rem",
          }}
        >
          Admin kini bisa
          <br />
          <span style={{ color: "#C4FF35" }}>tidur nyenyak,</span>
          <br />
          staff bisa kerja sesuka hati.
        </h1>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.55)",
            margin: "0 0 2.5rem",
            maxWidth: 420,
          }}
        >
          aplikasi absensi yang hadir menjawab keluh kesah admin dan staff. 
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              fontSize: "0.85rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: "#C4FF35",
              color: "#141414",
              padding: "0.85rem 2rem",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 24px rgba(196,255,53,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Coba Gratis
          </a>
          <a
            href="#features"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: "transparent",
              color: "#fff",
              padding: "0.85rem 2rem",
              borderRadius: "4px",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.18)",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.18)";
            }}
          >
            Pelajari lebih lanjut
          </a>
        </div>

        {/* Inline stats row */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "10+", label: "Admin Tidur Nyenyak" },
            { num: "500+", label: "Staff Semangat" },
            { num: "10+", label: "Klien Terbantu" },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 800,
                  fontSize: "1.6rem",
                  color: "#C4FF35",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 4,
                  letterSpacing: "0.04em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — phone mockup */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Glow behind phone */}
        <div
          style={{
            position: "absolute",
            width: "60%",
            height: "60%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,255,53,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
            zIndex: 0,
          }}
        />
        <img
          src="/dashboard.png"
          alt="Tampilan Aplikasi Dashboard CESLogic Absensi Wajah dan Kelola Tugas"
          style={{
            width: "clamp(220px, 38vw, 360px)",
            height: "auto",
            position: "relative",
            zIndex: 1,
            filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.7))",
          }}
        />
      </div>
    </section>
  );
}
