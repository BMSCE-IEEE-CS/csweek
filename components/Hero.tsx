"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import { FaAnglesRight } from "react-icons/fa6";

const TERMINAL_LINES = [
  {
    text: "INITIALIZING CS_WEEK_2026.exe",
    color: "text-[var(--green-terminal)]",
  },
  {
    text: "LOADING IEEE_COMPUTER_SOCIETY...",
    color: "text-[var(--green-terminal)]",
  },
  {
    text: "CELEBRATING 80 YEARS OF COMPUTING",
    color: "text-[var(--gold-mid)]",
  },
  {
    text: "BMSCE IEEE COMPUTER SOCIETY",
    color: "text-[var(--green-terminal)]",
  },
  {
    text: "EVENTS: CODEATHON · HUNT · HACKATHON",
    color: "text-[var(--green-terminal)]",
  },
  { text: "DATES: 30 MAR - 05 APR 2026", color: "text-[var(--gold-light)]" },
  { text: "REGISTRATION: NOW OPEN", color: "text-[var(--green-terminal)]" },
  { text: "STATUS: ARMED AND READY.", color: "text-[var(--gold-light)]" },
];

const TYPING_SPEED = 28;
const LINE_PAUSE = 180;

function useTypewriter(lines: typeof TERMINAL_LINES) {
  const [displayed, setDisplayed] = useState<
    { text: string; color: string; done: boolean }[]
  >([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIdx >= lines.length) {
      setDone(true);
      return;
    }
    const line = lines[lineIdx];
    if (charIdx < line.text.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          if (next.length <= lineIdx)
            next.push({ text: line.text[0], color: line.color, done: false });
          else
            next[lineIdx] = {
              text: line.text.slice(0, charIdx + 1),
              color: line.color,
              done: false,
            };
          return next;
        });
        setCharIdx((c) => c + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(t);
    } else {
      setDisplayed((prev) => {
        const next = [...prev];
        if (next[lineIdx]) next[lineIdx].done = true;
        return next;
      });
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, LINE_PAUSE);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx, lines]);

  return { displayed, done };
}

export default function Hero() {
  const { displayed, done } = useTypewriter(TERMINAL_LINES);

  return (
    <>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
          }
        }
        .terminal-font-size { font-size: 10px; }
        @media (min-width: 480px)  { .terminal-font-size { font-size: 11px; } }
        @media (min-width: 768px)  { .terminal-font-size { font-size: 12px; } }
      `}</style>

      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "7rem",
          paddingBottom: "5rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1152px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "6px 16px",
              marginBottom: "3rem",
              background: "rgba(200,150,12,0.08)",
              border: "1px solid rgba(200,150,12,0.35)",
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: "clamp(10px,2vw,12px)",
              letterSpacing: "0.12em",
              color: "var(--gold-light)",
              clipPath:
                "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "var(--gold-light)",
                animation: "pulse 2s infinite",
                flexShrink: 0,
              }}
            />
            IEEE COMPUTER SOCIETY · 80TH ANNIVERSARY
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "var(--gold-light)",
                animation: "pulse 2s infinite",
                flexShrink: 0,
              }}
            />
          </motion.div>

          <div
            className="hero-grid"
            style={{ width: "100%", alignItems: "center" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                style={{ marginBottom: "1.5rem", lineHeight: 1 }}
              >
                <div
                  style={{
                    fontFamily: "'Orbitron',sans-serif",
                    fontSize: "clamp(3.5rem,12vw,8.5rem)",
                    fontWeight: 900,
                    lineHeight: 0.88,
                    background:
                      "linear-gradient(160deg,#5a3e00 0%,#c8960c 30%,#FFD700 55%,#c8960c 80%,#8B6914 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 35px rgba(200,150,12,0.55))",
                    userSelect: "none",
                  }}
                >
                  CS
                </div>
                <div
                  style={{
                    fontFamily: "'Orbitron',sans-serif",
                    fontSize: "clamp(2.8rem,9vw,7rem)",
                    fontWeight: 900,
                    lineHeight: 0.88,
                    letterSpacing: "0.06em",
                    background:
                      "linear-gradient(160deg,#5a3e00 0%,#c8960c 30%,#FFD700 55%,#c8960c 80%,#8B6914 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 25px rgba(200,150,12,0.4))",
                    userSelect: "none",
                  }}
                >
                  WEEK
                </div>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  width: "100%",
                  marginBottom: "1.5rem",
                  transformOrigin: "left",
                }}
              >
                <div
                  style={{
                    height: "1px",
                    flex: 1,
                    background:
                      "linear-gradient(to right,var(--gold-mid),transparent)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Share Tech Mono'",
                    fontSize: "10px",
                    color: "var(--gold-mid)",
                    letterSpacing: "0.2em",
                    flexShrink: 0,
                  }}
                >
                  2026
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                style={{ marginBottom: "2rem" }}
              >
                <p
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontSize: "clamp(0.9rem,3vw,1.25rem)",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    color: "var(--text-secondary)",
                  }}
                >
                  30<sup style={{ fontSize: "0.6em" }}>TH</sup> MARCH - 5
                  <sup style={{ fontSize: "0.6em" }}>TH</sup> APRIL 2026
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                style={{ width: "100%", marginBottom: "2.5rem" }}
              >
                <p
                  style={{
                    fontFamily: "'Share Tech Mono',monospace",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    color: "var(--text-muted)",
                    marginBottom: "1.25rem",
                  }}
                >
                  [ EVENT STARTS IN ]
                </p>
                <CountdownTimer />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
              >
                <a
                  href="#events"
                  style={{
                    fontFamily: "'Orbitron',sans-serif",
                    fontSize: "clamp(9px,2vw,11px)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "11px 24px",
                    textDecoration: "none",
                    background: "linear-gradient(135deg,#8B6914,#FFD700)",
                    color: "#080808",
                    clipPath:
                      "polygon(9px 0%,100% 0%,calc(100% - 9px) 100%,0% 100%)",
                    transition: "opacity 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  className="inline-flex items-center gap-2"
                >
                  VIEW EVENTS <FaAnglesRight />
                </a>
                <a
                  href="#timeline"
                  style={{
                    fontFamily: "'Orbitron',sans-serif",
                    fontSize: "clamp(9px,2vw,11px)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "11px 24px",
                    textDecoration: "none",
                    color: "var(--gold-mid)",
                    border: "1px solid rgba(200,150,12,0.4)",
                    background: "transparent",
                    transition: "all 0.2s",
                    clipPath:
                      "polygon(9px 0%,100% 0%,calc(100% - 9px) 100%,0% 100%)",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(200,150,12,0.08)";
                    e.currentTarget.style.borderColor = "rgba(200,150,12,0.7)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(200,150,12,0.4)";
                  }}
                >
                  TIMELINE
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              style={{
                position: "relative",
                background: "rgba(4,4,4,0.97)",
                border: "1px solid rgba(200,150,12,0.3)",
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.8),0 0 60px rgba(200,150,12,0.1),0 24px 80px rgba(0,0,0,0.8)",
                fontFamily: "'Share Tech Mono',monospace",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  pointerEvents: "none",
                  backgroundImage:
                    "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.08) 2px,rgba(0,0,0,0.08) 4px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                  pointerEvents: "none",
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 30%,rgba(0,255,65,0.02) 0%,transparent 70%)",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.55rem 0.875rem",
                  background:
                    "linear-gradient(to bottom,rgba(30,25,5,0.9),rgba(15,12,2,0.9))",
                  borderBottom: "1px solid rgba(200,150,12,0.2)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  {[
                    { bg: "#ff5f57", s: "#ff5f5766" },
                    { bg: "#febc2e", s: "#febc2e66" },
                    { bg: "#28c840", s: "#28c84066" },
                  ].map((d, i) => (
                    <div
                      key={i}
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: d.bg,
                        boxShadow: `0 0 5px ${d.s}`,
                      }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "9px",
                    color: "rgba(200,150,12,0.5)",
                    letterSpacing: "0.1em",
                    whiteSpace: "nowrap",
                  }}
                >
                  cs_week_2026 - bash
                </div>
                <div
                  style={{
                    fontSize: "8px",
                    color: "rgba(200,150,12,0.3)",
                    letterSpacing: "0.08em",
                  }}
                >
                  IEEE CS v80
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 3,
                  padding: "1rem 0",
                  minHeight: "360px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ padding: "0 1rem", marginBottom: "0.6rem" }}>
                  <div
                    className="terminal-font-size"
                    style={{ lineHeight: 1.7 }}
                  >
                    <span style={{ color: "rgba(0,255,65,0.5)" }}>
                      root@bmsce-ieee-cs
                    </span>
                    <span style={{ color: "rgba(200,150,12,0.4)" }}>:</span>
                    <span style={{ color: "rgba(100,150,255,0.5)" }}>
                      ~/cs_week_2026
                    </span>
                    <span style={{ color: "rgba(200,150,12,0.4)" }}>$</span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.3)",
                        marginLeft: "0.4rem",
                      }}
                    >
                      ./boot.sh
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    height: "1px",
                    margin: "0 1rem 0.75rem",
                    background: "rgba(200,150,12,0.08)",
                  }}
                />

                <div
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <AnimatePresence>
                    {displayed.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.12 }}
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          padding: "0.15rem 1rem",
                          background:
                            i % 2 === 0
                              ? "transparent"
                              : "rgba(255,255,255,0.008)",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "8px",
                            color: "rgba(200,150,12,0.2)",
                            marginRight: "0.75rem",
                            minWidth: "14px",
                            textAlign: "right",
                            userSelect: "none",
                            flexShrink: 0,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{
                            color: "rgba(200,150,12,0.35)",
                            marginRight: "0.4rem",
                            fontSize: "10px",
                            flexShrink: 0,
                          }}
                        >
                          {">"}
                        </span>
                        <span
                          className={`font-mono terminal-font-size leading-relaxed ${line.color}`}
                        >
                          {line.text}
                          {i === displayed.length - 1 && !line.done && (
                            <span
                              className="animate-blink ml-0.5"
                              style={{ color: "var(--gold-light)" }}
                            >
                              ▋
                            </span>
                          )}
                        </span>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {done && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      style={{ marginTop: "0.4rem" }}
                    >
                      <div
                        style={{
                          height: "1px",
                          margin: "0.4rem 1rem",
                          background: "rgba(200,150,12,0.08)",
                        }}
                      />

                      <div
                        style={{
                          padding: "0.25rem 1rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "8px",
                            color: "rgba(200,150,12,0.2)",
                            minWidth: "14px",
                            textAlign: "right",
                            flexShrink: 0,
                          }}
                        >
                          {String(displayed.length + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{
                            color: "rgba(0,255,65,0.5)",
                            fontSize: "10px",
                          }}
                        >
                          root@bmsce-ieee-cs
                        </span>
                        <span
                          style={{
                            color: "rgba(200,150,12,0.4)",
                            fontSize: "10px",
                          }}
                        >
                          $
                        </span>
                        <span
                          style={{
                            color: "var(--gold-light)",
                            fontSize: "10px",
                          }}
                        >
                          cs_week
                        </span>
                        <span
                          style={{
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "10px",
                          }}
                        >
                          --register --now
                        </span>
                      </div>

                      <div style={{ padding: "0.15rem 1rem 0.15rem 3.25rem" }}>
                        <span
                          style={{
                            fontSize: "10px",
                            color: "rgba(255,255,255,0.3)",
                          }}
                        >
                          Registration open. See events below.
                        </span>
                      </div>

                      <div
                        style={{
                          padding: "0.25rem 1rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.35rem",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "8px",
                            color: "rgba(200,150,12,0.2)",
                            minWidth: "14px",
                            textAlign: "right",
                            flexShrink: 0,
                          }}
                        >
                          {String(displayed.length + 2).padStart(2, "0")}
                        </span>
                        <span
                          style={{
                            color: "rgba(0,255,65,0.5)",
                            fontSize: "10px",
                          }}
                        >
                          root@bmsce-ieee-cs
                        </span>
                        <span
                          style={{
                            color: "rgba(200,150,12,0.4)",
                            fontSize: "10px",
                            marginRight: "0.3rem",
                          }}
                        >
                          $
                        </span>
                        <span
                          className="animate-blink"
                          style={{
                            color: "var(--gold-light)",
                            fontSize: "12px",
                          }}
                        >
                          ▋
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    borderTop: "1px solid rgba(200,150,12,0.1)",
                    padding: "0.5rem 1rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: "0.4rem",
                    background: "rgba(200,150,12,0.02)",
                  }}
                >
                  {[
                    {
                      key: "CPU",
                      val: "IEEE_CS_v80",
                      color: "var(--gold-mid)",
                    },
                    { key: "MEM", val: "80YRS", color: "var(--gold-mid)" },
                    {
                      key: "NET",
                      val: "CONNECTED",
                      color: "var(--green-terminal)",
                    },
                    {
                      key: "SYS",
                      val: "ARMED",
                      color: "var(--green-terminal)",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "7px",
                          color: "rgba(200,150,12,0.3)",
                          letterSpacing: "0.12em",
                        }}
                      >
                        {item.key}
                      </span>
                      <span
                        style={{
                          fontSize: "9px",
                          color: item.color,
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                        }}
                      >
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            position: "absolute",
            bottom: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <span
            style={{
              fontFamily: "'Share Tech Mono'",
              fontSize: "8px",
              letterSpacing: "0.15em",
              color: "var(--text-muted)",
            }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: "1px",
              height: "1.5rem",
              background:
                "linear-gradient(to bottom,var(--gold-mid),transparent)",
            }}
          />
        </motion.div>
      </section>
    </>
  );
}
