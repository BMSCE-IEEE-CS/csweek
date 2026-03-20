"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "./Events";

const CENTER: React.CSSProperties = {
  width: "100%",
  maxWidth: "1152px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "1.25rem",
  paddingRight: "1.25rem",
};

export default function About() {
  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 2.5rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
        }
      `}</style>

      <section
        id="about"
        style={{ width: "100%", paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div style={CENTER}>
          <SectionHeader label="MISSION_BRIEF" title="ABOUT" />

          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: "10px",
                  color: "var(--gold-mid)",
                  letterSpacing: "0.14em",
                  marginBottom: "1.25rem",
                }}
              >
                {"> ABOUT CS_WEEK"}
              </p>
              <p
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontSize: "clamp(1rem,2vw,1.15rem)",
                  lineHeight: 1.85,
                  color: "var(--text-secondary)",
                  marginBottom: "1.25rem",
                }}
              >
                CS Week, by BMSCE IEEE Computer Society, is a week-long
                celebration of code, creativity, and computation.
              </p>
              <p
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontSize: "clamp(1rem,2vw,1.15rem)",
                  lineHeight: 1.85,
                  color: "var(--text-secondary)",
                  marginBottom: "1.25rem",
                }}
              >
                This year marks a milestone: the{" "}
                <span style={{ color: "var(--gold-light)", fontWeight: 700 }}>
                  80th anniversary of the IEEE Computer Society
                </span>
                , one of the world&apos;s oldest and most respected computing
                organizations.
              </p>
              <p
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontSize: "clamp(1rem,2vw,1.15rem)",
                  lineHeight: 1.85,
                  color: "var(--text-secondary)",
                }}
              >
                From competitive coding to cryptic hunts, multi-club
                collaborations to a full 24-hour hackathon - CS Week 2026 brings
                the brightest minds together for one unforgettable sprint.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                position: "relative",
                padding: "clamp(2rem,5vw,3.5rem) clamp(1.5rem,4vw,2.5rem)",
                textAlign: "center",
                background:
                  "linear-gradient(135deg,rgba(8,8,8,0.98),rgba(200,150,12,0.06))",
                border: "1px solid rgba(255,215,0,0.2)",
                boxShadow: "0 0 60px rgba(200,150,12,0.08)",
              }}
            >
              {[
                {
                  top: 0,
                  left: 0,
                  borderTop: "2px solid var(--gold-light)",
                  borderLeft: "2px solid var(--gold-light)",
                },
                {
                  top: 0,
                  right: 0,
                  borderTop: "2px solid var(--gold-light)",
                  borderRight: "2px solid var(--gold-light)",
                },
                {
                  bottom: 0,
                  left: 0,
                  borderBottom: "2px solid var(--gold-light)",
                  borderLeft: "2px solid var(--gold-light)",
                },
                {
                  bottom: 0,
                  right: 0,
                  borderBottom: "2px solid var(--gold-light)",
                  borderRight: "2px solid var(--gold-light)",
                },
              ].map((s, i) => (
                <span
                  key={i}
                  style={{
                    position: "absolute",
                    width: "18px",
                    height: "18px",
                    ...s,
                  }}
                />
              ))}

              <div
                style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: "10px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.18em",
                  marginBottom: "0.875rem",
                }}
              >
                SINCE 1946
              </div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontSize: "clamp(3.5rem,10vw,7rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                  background: "linear-gradient(135deg,#8B6914,#FFD700,#C8960C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 30px rgba(200,150,12,0.4))",
                }}
              >
                80
              </motion.div>
              <div
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontSize: "clamp(0.65rem,1.5vw,0.9rem)",
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.12em",
                  marginBottom: "1.25rem",
                }}
              >
                YEARS OF IEEE COMPUTER SOCIETY
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(200,150,12,0.2)",
                  marginBottom: "1.25rem",
                }}
              />
              <div
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontSize: "clamp(0.85rem,2vw,0.95rem)",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                }}
              >
                Advancing the theory and practice of computing
                <br />
                <span style={{ color: "var(--gold-mid)", fontSize: "0.85rem" }}>
                  1946 - 2026
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "clamp(1.25rem,3vw,2rem) clamp(1.25rem,3vw,2.5rem)",
              background: "rgba(200,150,12,0.04)",
              border: "1px solid rgba(200,150,12,0.12)",
              borderLeft: "4px solid var(--gold-mid)",
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                fontSize: "clamp(1.25rem,3vw,2rem)",
                color: "var(--gold-mid)",
                flexShrink: 0,
                fontFamily: "'Orbitron'",
              }}
            >
              ❝
            </div>
            <p
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontSize: "clamp(0.9rem,2vw,1.1rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              BMSCE IEEE Computer Society connects students to the global
              computing community - fostering innovation, collaboration, and
              technical excellence.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
