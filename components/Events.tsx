"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GlitchText from "./GlitchText";
import { FaAnglesRight } from "react-icons/fa6";

const CENTER: React.CSSProperties = {
  width: "100%",
  maxWidth: "1152px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "1.25rem",
  paddingRight: "1.25rem",
};

const events = [
  {
    id: "01",
    title: "CODEATHON",
    subtitle: "Online Coding Contest",
    dates: "MAR 30 - MAR 31",
    days: "Day 1 & 2",
    description:
      "An intense 2-day online competitive programming contest. Sharpen your algorithms, optimize your data structures, and battle for the top of the leaderboard.",
    tags: ["Competitive Programming", "Algorithms", "Online"],
    icon: "⟨/⟩",
    color: "#FFD700",
    status: "ONLINE",
    register: true,
    registerUrl: "https://forms.gle/tWwETsR5GgzDGQhw9",
    accentBg: "rgba(255,140,66,0.04)",
  },
  {
    id: "02",
    title: "CRYPTIC HUNT",
    subtitle: "Online Treasure Hunt",
    dates: "APR 1",
    days: "Day 3",
    description:
      "Decode encrypted messages, solve cryptic puzzles, and follow trails hidden in plain sight. A cyberpunk treasure hunt spanning the internet.",
    tags: ["Cryptography", "Puzzle Solving", "Online"],
    icon: "⌘",
    color: "#C8960C",
    status: "ONLINE",
    register: true,
    registerUrl: "https://forms.gle/nhYY3WkDhyNkyzSh9",
    accentBg: "rgba(255,140,66,0.04)",
  },
  {
    id: "03",
    title: "COLLAB EVENTS",
    subtitle: "Multi-Club Collaborations",
    dates: "APR 2 & APR 4",
    days: "Day 4 & 6",
    description:
      "Cross-disciplinary events with college clubs across BMSCE. Tech, design, and innovation collide - workshops, quizzes, and more.",
    tags: ["Cross-Disciplinary", "Workshops", "Multi-Club"],
    icon: "◈",
    color: "#FF8C42",
    status: "IN-PERSON",
    register: false,
    accentBg: "rgba(255,140,66,0.04)",
    glowColor: "rgba(255,140,66,0.15)",
  },
  // {
  //   id: '04', title: 'MYSTERY EVENT', subtitle: 'To Be Announced',
  //   dates: 'APR 3', days: 'Day 5',
  //   description: 'Something is being planned. Classification: REDACTED.',
  //   tags: ['???', 'CLASSIFIED', 'Stay Tuned'],
  //   icon: '?', color: '#555555', status: 'TBA', register: false, redacted: true,
  // },
  {
    id: "04",
    title: "HACKATHON",
    subtitle: "24-Hour Build Sprint",
    dates: "APR 4 - APR 5",
    days: "Day 6 & 7",
    description:
      "One idea. One team. 24 hours to turn it into something real. The best projects don't just win; they ship.",
    tags: ["Hackathon", "24 Hours", "In-Person"],
    icon: "⚡",
    color: "#FFD700",
    status: "IN-PERSON",
    register: true,
    registerUrl: "/synthverse",
    buttonLabel: "VISIT WEBSITE",
    highlight: true,
    accentBg: "rgba(255,140,66,0.04)",
  },
];

export type EventType = (typeof events)[0] & {
  accentBg?: string;
  glowColor?: string;
  buttonLabel?: string;
};

export default function Events() {
  return (
    <>
      <style>{`
        .events-top-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }
        @media (min-width: 640px)  { .events-top-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .events-top-grid { grid-template-columns: 1fr 1fr 1fr; } }

        .hackathon-card {
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .hackathon-card { flex-direction: row; gap: 2.5rem; }
        }
      `}</style>

      <section
        id="events"
        style={{ width: "100%", paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div style={CENTER}>
          <SectionHeader label="SCHEDULED_OPERATIONS" title="EVENTS" />

          <div className="events-top-grid">
            {events.slice(0, 3).map((e, i) => (
              <motion.div
                key={e.id}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  show: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      delay: i * 0.1,
                      ease: "easeOut",
                    },
                  }),
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                style={{ height: "100%" }}
              >
                <EventCard event={e} />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 32 },
              show: (i: number) => ({
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
              }),
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            custom={3}
          >
            <EventCard event={events[3]} wide />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export function SectionHeader({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: "4rem", textAlign: "center" }}
    >
      <p
        style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: "11px",
          color: "var(--gold-mid)",
          letterSpacing: "0.15em",
          marginBottom: "0.75rem",
        }}
      >
        [ {label} ]
      </p>
      <GlitchText
        text={title}
        trigger={inView}
        duration={1000}
        as="h2"
        className="font-black"
        style={{
          fontFamily: "'Orbitron',sans-serif",
          fontSize: "clamp(1.5rem,4.5vw,3.5rem)",
          background: "linear-gradient(135deg,#8B6914,#FFD700,#C8960C)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          margin: 0,
          letterSpacing: "0.05em",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1.25rem",
        }}
      >
        <div
          style={{
            height: "1px",
            width: "5rem",
            background: "var(--gold-dark)",
          }}
        />
        <div
          style={{
            width: "7px",
            height: "7px",
            background: "var(--gold-mid)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            height: "1px",
            width: "5rem",
            background: "var(--gold-dark)",
          }}
        />
      </div>
    </motion.div>
  );
}

function EventCard({
  event,
  wide = false,
}: {
  event: EventType;
  wide?: boolean;
}) {
  const bg = event.accentBg ?? "rgba(12,12,12,0.95)";
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={wide ? "hackathon-card" : ""}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: wide ? undefined : "column",
        padding: "1.5rem",
        height: "100%",
        background: bg,
        border: `1px solid ${event.highlight ? "rgba(255,215,0,0.35)" : `${event.color}30`}`,
        boxShadow: event.highlight
          ? "0 0 50px rgba(200,150,12,0.12)"
          : event.glowColor
            ? `0 0 40px ${event.glowColor}`
            : "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      {[
        {
          top: 0,
          left: 0,
          borderTop: `2px solid ${event.color}`,
          borderLeft: `2px solid ${event.color}`,
        },
        {
          top: 0,
          right: 0,
          borderTop: `2px solid ${event.color}`,
          borderRight: `2px solid ${event.color}`,
        },
        {
          bottom: 0,
          left: 0,
          borderBottom: `2px solid ${event.color}`,
          borderLeft: `2px solid ${event.color}`,
        },
        {
          bottom: 0,
          right: 0,
          borderBottom: `2px solid ${event.color}`,
          borderRight: `2px solid ${event.color}`,
        },
      ].map((s, i) => (
        <span
          key={i}
          style={{ position: "absolute", width: "10px", height: "10px", ...s }}
        />
      ))}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: wide ? "0 0 280px" : "1",
          justifyContent: wide ? "center" : "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: "10px",
              color: "var(--text-muted)",
            }}
          >
            EVENT_{event.id}
          </span>
          <span
            style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              padding: "2px 7px",
              color:
                event.status === "ONLINE"
                  ? "var(--green-terminal)"
                  : event.color,
              border: `1px solid ${event.status === "ONLINE" ? "rgba(0,255,65,0.3)" : `${event.color}55`}`,
              background:
                event.status === "ONLINE"
                  ? "rgba(0,255,65,0.05)"
                  : `${event.color}10`,
            }}
          >
            {event.status}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "0.875rem",
          }}
        >
          <div
            style={{
              width: "46px",
              height: "46px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.3rem",
              fontFamily: "'Share Tech Mono',monospace",
              color: event.color,
              border: `1px solid ${event.color}44`,
              background: `${event.color}12`,
              boxShadow: `0 0 14px ${event.color}30`,
            }}
          >
            {event.icon}
          </div>
          <div style={{ minWidth: 0 }}>
            <h3
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontSize: "clamp(0.8rem,2vw,1.05rem)",
                fontWeight: 900,
                color: event.color,
                margin: 0,
                filter: `drop-shadow(0 0 7px ${event.color}66)`,
              }}
            >
              {event.title}
            </h3>
            <p
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                margin: "2px 0 0",
                letterSpacing: "0.06em",
              }}
            >
              {event.subtitle}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "3px 10px",
            alignSelf: "flex-start",
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: "11px",
            color: event.color,
            background: `${event.color}0f`,
            border: `1px solid ${event.color}30`,
            marginBottom: wide ? 0 : "1rem",
          }}
        >
          ◈ {event.dates} · {event.days}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
          marginTop: wide ? 0 : "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: "clamp(0.85rem,2vw,0.95rem)",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "1rem",
          }}
        >
          {event.description}
        </p>
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: event.register && event.registerUrl ? "1rem" : 0,
            }}
          >
            {event.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: "11px",
                  color: event.color,
                  padding: "2px 7px",
                  border: `1px solid ${event.color}30`,
                  background: `${event.color}08`,
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
          {event.register && event.registerUrl && (
            <motion.a
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ opacity: 0.85 }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: wide ? "180px" : "100%",
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
                background: `linear-gradient(135deg,${event.color}99,${event.color})`,
                color: "#080808",
                textDecoration: "none",
                cursor: "pointer",
                clipPath:
                  "polygon(9px 0%,100% 0%,calc(100% - 9px) 100%,0% 100%)",
              }}
            >
              {event.buttonLabel || "REGISTER"} <FaAnglesRight />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
