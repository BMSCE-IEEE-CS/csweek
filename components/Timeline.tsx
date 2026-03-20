"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "./Events";

const CENTER: React.CSSProperties = {
  width: "100%",
  maxWidth: "860px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "1.25rem",
  paddingRight: "1.25rem",
};

const days = [
  {
    date: "MAR 30",
    day: "Monday",
    events: [
      {
        time: "ALL DAY",
        title: "CODEATHON - Day 1",
        type: "contest",
        note: "Begin of Codeathon · Open for all.",
      },
    ],
  },
  {
    date: "MAR 31",
    day: "Tuesday",
    events: [
      {
        time: "ALL DAY",
        title: "CODEATHON - Day 2",
        type: "contest",
        note: "Final submissions + results.",
      },
    ],
  },
  {
    date: "APR 1",
    day: "Wednesday",
    events: [
      {
        time: "ALL DAY",
        title: "CRYPTIC TREASURE HUNT",
        type: "hunt",
        note: "Online · Hunt the clues.",
      },
    ],
  },
  {
    date: "APR 2",
    day: "Thursday",
    events: [
      {
        time: "TBD",
        title: "MULTI-CLUB COLLABORATION",
        type: "collab",
        note: "Various club events on-campus.",
      },
    ],
  },
  {
    date: "APR 3",
    day: "Friday",
    events: [
      {
        time: "???",
        title: "MYSTERY EVENT",
        type: "mystery",
        note: "Details TBA. Watch this space.",
      },
    ],
  },
  {
    date: "APR 4",
    day: "Saturday",
    events: [
      {
        time: "MORNING",
        title: "CLUB COLLABORATION EVENTS",
        type: "collab",
        note: "On-campus events.",
      },
      {
        time: "14:00",
        title: "⚡ 24HR HACKATHON BEGINS",
        type: "hackathon",
        note: "Build. Break. Ship.",
      },
    ],
  },
  {
    date: "APR 5",
    day: "Sunday",
    events: [
      {
        time: "14:00",
        title: "HACKATHON ENDS + JUDGING",
        type: "hackathon",
        note: "Demos · Winners announced.",
      },
    ],
  },
];

const T: Record<string, { color: string; bg: string; label: string }> = {
  contest: { color: "#FFD700", bg: "rgba(255,215,0,0.05)", label: "CONTEST" },
  hunt: { color: "#C8960C", bg: "rgba(200,150,12,0.06)", label: "HUNT" },
  collab: { color: "#FF8C42", bg: "rgba(255,140,66,0.06)", label: "COLLAB" },
  mystery: { color: "#3a3a3a", bg: "rgba(30,30,30,0.5)", label: "???" },
  hackathon: {
    color: "#FFD700",
    bg: "rgba(255,215,0,0.07)",
    label: "HACKATHON",
  },
};

export default function Timeline() {
  return (
    <>
      <style>{`
        .tl-row { display: flex; align-items: flex-start; }
        .tl-date {
          width: 100px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding-right: 1rem;
          padding-top: 5px;
        }
        .tl-spine { left: 100px; }
        @media (min-width: 480px) {
          .tl-date  { width: 130px; padding-right: 1.25rem; }
          .tl-spine { left: 130px; }
        }
      `}</style>

      <section
        id="timeline"
        style={{ width: "100%", paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div style={CENTER}>
          <SectionHeader label="MISSION_TIMELINE" title="TIMELINE" />

          <div style={{ position: "relative" }}>
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="tl-spine"
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "1px",
                pointerEvents: "none",
                background:
                  "linear-gradient(to bottom,transparent,var(--gold-dark) 5%,var(--gold-dark) 95%,transparent)",
                transformOrigin: "top",
              }}
            />

            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              {days.map((day, di) => (
                <motion.div
                  key={day.date}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: di * 0.07 }}
                  className="tl-row"
                >
                  <div className="tl-date">
                    <span
                      style={{
                        fontFamily: "'Orbitron',sans-serif",
                        fontSize: "clamp(0.7rem,2vw,0.85rem)",
                        fontWeight: 900,
                        color: "var(--gold-light)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {day.date}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Share Tech Mono',monospace",
                        fontSize: "clamp(0.6rem,1.5vw,0.7rem)",
                        color: "var(--text-muted)",
                        marginTop: "3px",
                      }}
                    >
                      {day.day}
                    </span>
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: di * 0.07 + 0.2 }}
                    style={{
                      flexShrink: 0,
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      marginTop: "7px",
                      background: "var(--gold-mid)",
                      border: "2px solid var(--bg-primary)",
                      boxShadow: "0 0 8px rgba(200,150,12,0.8)",
                      zIndex: 1,
                    }}
                  />

                  <div
                    style={{
                      flex: 1,
                      paddingLeft: "1.125rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.625rem",
                    }}
                  >
                    {day.events.map((ev, j) => {
                      const s = T[ev.type] || T.collab;
                      return (
                        <motion.div
                          key={j}
                          whileHover={{ x: 4, transition: { duration: 0.15 } }}
                          style={{
                            padding: "0.75rem 1rem",
                            cursor: "default",
                            background: s.bg,
                            border: `1px solid ${s.color}22`,
                            borderLeft: `3px solid ${s.color}`,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.6rem",
                              marginBottom: "0.4rem",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "'Share Tech Mono',monospace",
                                fontSize: "8px",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                padding: "2px 5px",
                                color: s.color,
                                border: `1px solid ${s.color}44`,
                                background: `${s.color}10`,
                              }}
                            >
                              {s.label}
                            </span>
                            <span
                              style={{
                                fontFamily: "'Share Tech Mono',monospace",
                                fontSize: "clamp(0.6rem,1.5vw,0.7rem)",
                                color: "var(--text-muted)",
                              }}
                            >
                              {ev.time}
                            </span>
                          </div>
                          <div
                            style={{
                              fontFamily: "'Rajdhani',sans-serif",
                              fontSize: "clamp(0.85rem,2vw,0.95rem)",
                              fontWeight: 700,
                              letterSpacing: "0.06em",
                              marginBottom: "0.3rem",
                              color:
                                s.color === "#3a3a3a"
                                  ? "#3a3a3a"
                                  : "var(--text-primary)",
                            }}
                          >
                            {ev.title}
                          </div>
                          <div
                            style={{
                              fontFamily: "'Share Tech Mono',monospace",
                              fontSize: "clamp(0.6rem,1.5vw,0.7rem)",
                              color: "var(--text-muted)",
                            }}
                          >
                            {ev.note}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
