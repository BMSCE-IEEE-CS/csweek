"use client";
import { useState, useEffect } from "react";

const TARGET = new Date("2026-03-30T00:00:00");
function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const diff = TARGET.getTime() - Date.now();
      if (diff <= 0) return setT({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  const units = [
    { label: "DAYS", value: t.days },
    { label: "HRS", value: t.hours },
    { label: "MIN", value: t.minutes },
    { label: "SEC", value: t.seconds },
  ];

  return (
    <>
      <style>{`
        .countdown-box {
          width: 58px; height: 58px;
        }
        .countdown-val { font-size: 1.1rem; }
        @media (min-width: 480px) {
          .countdown-box { width: 64px; height: 64px; }
          .countdown-val { font-size: 1.25rem; }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          flexWrap: "nowrap",
        }}
      >
        {units.map((u, i) => (
          <div
            key={u.label}
            style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="countdown-box"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(200,150,12,0.05)",
                  border: "1px solid rgba(200,150,12,0.3)",
                  boxShadow: "0 0 14px rgba(200,150,12,0.12)",
                }}
              >
                <span
                  className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l"
                  style={{ borderColor: "var(--gold-light)" }}
                />
                <span
                  className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r"
                  style={{ borderColor: "var(--gold-light)" }}
                />
                <span
                  className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l"
                  style={{ borderColor: "var(--gold-light)" }}
                />
                <span
                  className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r"
                  style={{ borderColor: "var(--gold-light)" }}
                />
                <span
                  className="countdown-val font-bold"
                  style={{
                    fontFamily: "'Orbitron',sans-serif",
                    background: "linear-gradient(135deg,#8B6914,#FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {pad(u.value)}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  marginTop: "4px",
                  letterSpacing: "0.1em",
                }}
              >
                {u.label}
              </span>
            </div>
            {i < 3 && (
              <span
                className="animate-blink"
                style={{
                  color: "var(--gold-mid)",
                  fontFamily: "'Orbitron'",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                }}
              >
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
