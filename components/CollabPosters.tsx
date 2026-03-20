"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./Events";

const CENTER: React.CSSProperties = {
  width: "100%",
  maxWidth: "1152px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "2rem",
  paddingRight: "2rem",
};

const posters = [
  {
    id: 1,
    club: "BMSCE IEEE Student Branch",
    event: "xyz",
    date: "APR 2",
    color: "#4A9EFF",
  },
  {
    id: 2,
    club: "BMSCE IEEE WIE",
    event: "xyz",
    date: "APR 2",
    color: "#FF6B9D",
  },
  {
    id: 3,
    club: "BMSCE IEEE PES & SC",
    event: "xyz",
    date: "APR 4",
    color: "#34D399",
  },
  {
    id: 4,
    club: "IEEE AP-S",
    event: "xyz",
    date: "APR 2",
    color: "#F59E0B",
  },
  {
    id: 5,
    club: "Augment AI",
    event: "xyz",
    date: "APR 4",
    color: "#A78BFA",
  },
];

export default function CollabPosters() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .posters-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 480px)  { .posters-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .posters-grid { grid-template-columns: repeat(3,1fr); } }
      `}</style>

      <section
        id="collabs"
        style={{ width: "100%", paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div style={CENTER}>
          <SectionHeader label="ALLIED_OPERATIONS" title="COLLABORATIONS" />

          <div className="posters-grid">
            {posters.map((poster, i) => (
              <motion.div
                key={poster.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setHovered(poster.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  background: "rgba(10,10,10,0.95)",
                  border: `1px solid ${hovered === poster.id ? poster.color + "55" : "rgba(200,150,12,0.12)"}`,
                  transition: "all 0.3s ease",
                  transform:
                    hovered === poster.id
                      ? "translateY(-6px)"
                      : "translateY(0)",
                  boxShadow:
                    hovered === poster.id
                      ? `0 20px 50px ${poster.color}22`
                      : "0 4px 20px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    background: `linear-gradient(160deg,rgba(8,8,8,0.95) 0%,${poster.color}10 60%,${poster.color}1a 100%)`,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `linear-gradient(${poster.color}09 1px,transparent 1px),linear-gradient(90deg,${poster.color}09 1px,transparent 1px)`,
                      backgroundSize: "26px 26px",
                    }}
                  />
                  {[
                    {
                      top: "10px",
                      left: "10px",
                      borderTop: `2px solid ${poster.color}`,
                      borderLeft: `2px solid ${poster.color}`,
                    },
                    {
                      top: "10px",
                      right: "10px",
                      borderTop: `2px solid ${poster.color}`,
                      borderRight: `2px solid ${poster.color}`,
                    },
                    {
                      bottom: "10px",
                      left: "10px",
                      borderBottom: `2px solid ${poster.color}`,
                      borderLeft: `2px solid ${poster.color}`,
                    },
                    {
                      bottom: "10px",
                      right: "10px",
                      borderBottom: `2px solid ${poster.color}`,
                      borderRight: `2px solid ${poster.color}`,
                    },
                  ].map((s, idx) => (
                    <span
                      key={idx}
                      style={{
                        position: "absolute",
                        width: "14px",
                        height: "14px",
                        ...s,
                      }}
                    />
                  ))}

                  {/* <Image src={poster.imageUrl} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /> */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      textAlign: "center",
                      padding: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Share Tech Mono',monospace",
                        fontSize: "9px",
                        color: poster.color,
                        letterSpacing: "0.12em",
                        marginBottom: "1rem",
                        opacity: 0.6,
                      }}
                    >
                      [ POSTER ]
                    </div>
                    <div
                      style={{
                        fontFamily: "'Orbitron',sans-serif",
                        fontSize: "clamp(1.5rem,4vw,2.75rem)",
                        fontWeight: 900,
                        color: poster.color,
                        lineHeight: 1,
                        filter: `drop-shadow(0 0 20px ${poster.color}88)`,
                      }}
                    >
                      {String(poster.id).padStart(2, "0")}
                    </div>
                  </div>

                  {hovered === poster.id && (
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: `linear-gradient(to right,transparent,${poster.color},transparent)`,
                        animation: "scan 1.5s linear infinite",
                        opacity: 0.7,
                      }}
                    />
                  )}
                </div>

                <div
                  style={{
                    padding: "0.875rem 1.125rem",
                    borderTop: `1px solid ${poster.color}22`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Orbitron',sans-serif",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: poster.color,
                      marginBottom: "0.25rem",
                      letterSpacing: "0.05em",
                      filter: `drop-shadow(0 0 5px ${poster.color}55)`,
                    }}
                  >
                    {poster.club}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Rajdhani',sans-serif",
                      fontSize: "clamp(0.8rem,2vw,1rem)",
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {poster.event}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Share Tech Mono',monospace",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {poster.date} · CS WEEK 2026
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
