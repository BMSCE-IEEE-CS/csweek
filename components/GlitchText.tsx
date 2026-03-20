"use client";
import { useState, useEffect, useRef } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
  trigger?: boolean;
  duration?: number;
}

const CHARS = "!@#$%^&*<>?/\\|[]{}0123456789ABCDEF~+-=";

export default function GlitchText({
  text,
  className = "",
  style,
  as: Tag = "span",
  trigger = true,
  duration = 900,
}: GlitchTextProps) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!trigger) {
      setDisplay(text);
      return;
    }

    const start = performance.now();
    const totalMs = duration;

    const tick = () => {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / totalMs, 1);

      const revealed = Math.floor(progress * text.length);

      setDisplay(
        text
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < revealed) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );

      if (progress < 1) {
        rafRef.current = setTimeout(tick, 32);
      } else {
        setDisplay(text);
      }
    };

    tick();
    return () => {
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [trigger, text, duration]);

  return (
    // @ts-ignore
    <Tag className={`font-mono ${className}`} style={style}>
      {display}
    </Tag>
  );
}
