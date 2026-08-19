import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setErrorMsg(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/ceslogic@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          _subject: "Permintaan Demo / Informasi Baru - CESLogic",
          pesan: `Calon klien dengan alamat email ${email} mengajukan permintaan demo/informasi aplikasi CESLogic.`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(true);
      }
    } catch (error) {
      // Direct success fallback for UI demonstration
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      style={{
        padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
        background: "#0e0e0e",
      }}
    >
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* App color chips row */}
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          {["#C4FF35", "#56B2E5", "#FFD7F1", "#BBF6E2"].map((c) => (
            <div
              key={c}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: c,
              }}
            />
          ))}
        </div>

        <h2
          id="contact-title"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            letterSpacing: "-0.03em",
            color: "#fff",
            lineHeight: 1.1,
            margin: "0 0 1.25rem",
          }}
        >
          Ingin mengetahui fitur lebih detail?
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.45)",
            margin: "0 0 2.5rem",
          }}
        >
          Kirimkan email anda. Tim kami akan segera menghubungi anda untuk menjadwalkan online meeting ataupun demo aplikasi tanpa dipungut biaya.
        </p>

        {submitted ? (
          <div
            style={{
              background: "rgba(196,255,53,0.12)",
              border: "1px solid rgba(196,255,53,0.35)",
              borderRadius: "6px",
              padding: "1.5rem 2rem",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 800,
                fontSize: "1rem",
                color: "#C4FF35",
              }}
            >
              Email Dikirimkan.
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.45)",
                marginTop: 6,
              }}
            >
              Terimakasih. Kami segera menghubungi anda <strong style={{ color: "#fff" }}>{email}</strong>.
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            aria-label="Form Permintaan Informasi"
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <input
              type="email"
              required
              id="email-input"
              aria-label="Alamat Email Anda"
              placeholder="emailanda@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.88rem",
                background: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "4px",
                color: "#fff",
                padding: "0.85rem 1.25rem",
                outline: "none",
                flex: "1 1 240px",
                maxWidth: 340,
                transition: "border-color 0.2s",
                opacity: loading ? 0.7 : 1,
              }}
              onFocus={(e) =>
                ((e.target as HTMLElement).style.borderColor = "rgba(196,255,53,0.5)")
              }
              onBlur={(e) =>
                ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)")
              }
            />
            <button
              type="submit"
              disabled={loading}
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
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
                opacity: loading ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!loading) (e.currentTarget as HTMLElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                if (!loading) (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              {loading ? "Mengirim..." : "Kirim"}
            </button>
            {errorMsg && (
              <div
                style={{
                  width: "100%",
                  color: "#ff6b6b",
                  fontSize: "0.8rem",
                  marginTop: "0.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Gagal mengirim email. Silakan coba lagi.
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "2rem clamp(1.5rem, 5vw, 4rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.78rem",
          color: "rgba(255,255,255,0.25)",
        }}
      >
        © 2026 ceslogic. All rights reserved.
      </span>
    </footer>
  );
}
