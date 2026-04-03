"use client";
import { motion } from "framer-motion";
import { FaRegCopyright } from "react-icons/fa6";
import Image from "next/image";

const CENTER: React.CSSProperties = {
  width: "100%",
  maxWidth: "1152px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "1.25rem",
  paddingRight: "1.25rem",
};

const quickLinks = [
  { label: "Events", href: "#events" },
  { label: "Collaborations", href: "#collabs" },
  { label: "Timeline", href: "#timeline" },
  { label: "About", href: "#about" },
];

const eventLinks = [
  { label: "Codeathon", href: "#events" },
  { label: "Cryptic Hunt", href: "#events" },
  { label: "Collab Events", href: "#events" },
  {
    label: "Hackathon",
    href: "https://synthverse-hackathon.vercel.app/",
    external: true,
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        @media (min-width: 640px)  { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr; gap: 4rem; } }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: flex-start;
        }
        @media (min-width: 768px) {
          .footer-bottom { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>

      <footer
        style={{ width: "100%", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right,transparent,rgba(200,150,12,0.5) 20%,rgba(255,215,0,0.7) 50%,rgba(200,150,12,0.5) 80%,transparent)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%,rgba(200,150,12,0.04) 0%,transparent 70%)",
          }}
        />

        <div
          style={{
            ...CENTER,
            paddingTop: "3.5rem",
            paddingBottom: "2.5rem",
            position: "relative",
          }}
        >
          <div className="footer-grid">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.125rem",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="BMSCE IEEE CS"
                  width={38}
                  height={38}
                  className="shrink-0 object-contain"
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Orbitron',sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 900,
                      letterSpacing: "0.1em",
                      lineHeight: 1.3,
                      background: "linear-gradient(135deg,#c8960c,#FFD700)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    BMSCE IEEE CS
                  </div>
                  <div
                    style={{
                      fontFamily: "'Share Tech Mono',monospace",
                      fontSize: "8px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.1em",
                      marginTop: "2px",
                    }}
                  >
                    STUDENT BRANCH CHAPTER
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontSize: "clamp(0.85rem,2vw,0.95rem)",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                  maxWidth: "300px",
                }}
              >
                Celebrating 80 years of the IEEE Computer Society with a week of
                code, creativity, and collaboration.
              </p>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "5px 12px",
                  background: "rgba(200,150,12,0.06)",
                  border: "1px solid rgba(200,150,12,0.2)",
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: "9px",
                  color: "var(--gold-mid)",
                  letterSpacing: "0.1em",
                  clipPath:
                    "polygon(7px 0%,100% 0%,calc(100% - 7px) 100%,0% 100%)",
                }}
              >
                <span
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--gold-mid)",
                    animation: "pulse 2s infinite",
                  }}
                />
                30 MAR - 5 APR · 2026
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  color: "var(--gold-mid)",
                  letterSpacing: "0.18em",
                  marginBottom: "1.25rem",
                }}
              >
                NAVIGATE
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: "'Share Tech Mono',monospace",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      letterSpacing: "0.06em",
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.45rem",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--gold-light)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-muted)")
                    }
                  >
                    <span
                      style={{ color: "var(--gold-dark)", fontSize: "7px" }}
                    >
                      ◈
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  color: "var(--gold-mid)",
                  letterSpacing: "0.18em",
                  marginBottom: "1.25rem",
                }}
              >
                EVENTS
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {eventLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    style={{
                      fontFamily: "'Share Tech Mono',monospace",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      letterSpacing: "0.06em",
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.45rem",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--gold-light)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-muted)")
                    }
                  >
                    <span
                      style={{ color: "var(--gold-dark)", fontSize: "7px" }}
                    >
                      ◈
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div
            style={{
              height: "1px",
              marginBottom: "1.75rem",
              background:
                "linear-gradient(to right,transparent,rgba(200,150,12,0.2) 30%,rgba(200,150,12,0.2) 70%,transparent)",
            }}
          />

          <div className="footer-bottom">
            <div
              style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: "clamp(9px,2vw,10px)",
                color: "var(--text-muted)",
                letterSpacing: "0.06em",
              }}
              className="inline-flex items-center gap-1"
            >
              <FaRegCopyright /> 2026 BMSCE IEEE COMPUTER SOCIETY ·{" "}
              <span style={{ color: "rgba(200,150,12,0.4)" }}>
                B.M.S. COLLEGE OF ENGINEERING, BENGALURU
              </span>
            </div>

            <div
              style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--green-terminal)",
                    boxShadow: "0 0 6px var(--green-terminal)",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Share Tech Mono',monospace",
                    fontSize: "9px",
                    color: "var(--green-terminal)",
                    letterSpacing: "0.08em",
                  }}
                >
                  SYSTEMS ONLINE
                </span>
              </div>
              <div
                style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: "9px",
                  color: "rgba(200,150,12,0.3)",
                  letterSpacing: "0.06em",
                }}
              >
                BREACH DETECTED.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
