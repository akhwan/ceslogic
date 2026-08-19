import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Fitur", href: "#features" },
  { label: "Kompatibilitas", href: "#kompatibilitas" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      aria-label="Navigasi Utama"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(20,20,20,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
        padding: "0 clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <a href="#" aria-label="CESLogic Beranda" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src="/logo.svg"
            alt="Logo CESLogic - Aplikasi Absensi & Kelola Tim"
            style={{ height: 28, width: "auto" }}
          />
        </a>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#C4FF35")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: "#C4FF35",
              color: "#141414",
              padding: "0.55rem 1.25rem",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.opacity = "1")
            }
          >
            KONTAK
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: 5,
            padding: 4,
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#C4FF35",
                borderRadius: 2,
                transition: "all 0.2s",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px,5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px,-5px)"
                    : menuOpen && i === 1
                    ? "opacity(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "#1a1a1a",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "1rem clamp(1.5rem, 5vw, 4rem) 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.9rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#fff",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              fontSize: "0.85rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: "#C4FF35",
              color: "#141414",
              padding: "0.7rem 1.5rem",
              borderRadius: "4px",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "0.5rem",
            }}
          >
            Kontak
          </a>
        </div>
      )}
    </nav>
  );
}
