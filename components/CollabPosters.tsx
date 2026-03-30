"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./Events";
import { FaAnglesRight } from "react-icons/fa6";

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
    club: "Augment.AI",
    event: "Twin-Sight",
    date: "APR 4, 10:00 AM - 1:00 PM",
    color: "#A78BFA",
    registerUrl: "https://forms.gle/AuGjSjjtnum3VSKM8",
    imageUrl: "/images/twin-sight.jpg",
  },
  {
    id: 2,
    club: "IEEE AP-S",
    event: "Hertz to Hyperlink",
    date: "APR 4, 10:00 AM - 2:00 PM",
    color: "#F59E0B",
    registerUrl: "https://forms.gle/4uHNiVoB4ksJRjjD9",
    imageUrl: "/images/hertz-to-hyperlink.jpg",
  },
  {
    id: 3,
    club: "BMSCE IEEE PES & SC",
    event: "TRACEX",
    date: "APR 2, 1:00 AM - 4:00 PM",
    color: "#34D399",
    registerUrl: "https://forms.gle/TYreEo4FExV6aeah8",
    imageUrl: "/posters/pessc.png",
  },
  {
    id: 4,
    club: "BMSCE IEEE Student Branch",
    event: "RESPAWN POINT",
    date: "APR 2, 11:00 AM - 2:00 PM",
    color: "#4A9EFF",
    registerUrl: "https://forms.gle/irzYFarEc7cWYu3H6",
    imageUrl: "/posters/sb.jpeg",
  },
  {
    id: 5,
    club: "BMSCE IEEE WIE",
    event: "MIND MARKET",
    date: "APR 4, 2:00 PM - 5:00 PM",
    color: "#FF6B9D",
    registerUrl: "https://forms.gle/bkhS5wPzHpnNAAtG8",
    imageUrl: "/posters/wie.jpeg",
  },
];

export default function CollabPosters() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedPoster, setSelectedPoster] = useState<
    (typeof posters)[0] | null
  >(null);

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
        
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        
        .modal-content {
          background: rgba(10, 10, 10, 0.98);
          border: 1px solid rgba(200, 150, 12, 0.2);
          border-radius: 8px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 75px rgba(0, 0, 0, 0.6);
          animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      {selectedPoster && (
        <div className="modal-backdrop" onClick={() => setSelectedPoster(null)}>
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "1/1",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                background: `linear-gradient(160deg,rgba(8,8,8,0.95) 0%,${selectedPoster.color}10 60%,${selectedPoster.color}1a 100%)`,
              }}
            >
              <Image
                src={selectedPoster.imageUrl}
                alt={selectedPoster.event}
                fill
                style={{
                  objectFit: "cover",
                  position: "absolute",
                  inset: 0,
                }}
              />
            </div>
          </motion.div>
        </div>
      )}

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
                  cursor: "pointer",
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
                onClick={() => setSelectedPoster(poster)}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    background: `linear-gradient(160deg,rgba(8,8,8,0.95) 0%,${poster.color}10 60%,${poster.color}1a 100%)`,
                  }}
                >
                  <Image
                    src={poster.imageUrl}
                    alt={poster.event}
                    fill
                    style={{
                      objectFit: "cover",
                      position: "absolute",
                      inset: 0,
                    }}
                  />
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
                      marginBottom: "0.75rem",
                    }}
                  >
                    {poster.date} · CS WEEK 2026
                  </div>
                  <motion.a
                    href={poster.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ opacity: 0.85 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      width: "100%",
                      padding: "10px 0",
                      border: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      fontFamily: "'Orbitron',sans-serif",
                      fontSize: "clamp(0.75rem,1.5vw,0.85rem)",
                      fontWeight: 900,
                      letterSpacing: "0.08em",
                      background: `linear-gradient(135deg,${poster.color}99,${poster.color})`,
                      color: "#080808",
                      textDecoration: "none",
                      cursor: "pointer",
                      clipPath:
                        "polygon(9px 0%,100% 0%,calc(100% - 9px) 100%,0% 100%)",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    REGISTER <FaAnglesRight />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
