"use client";
import { useEffect, useRef } from "react";

export default function MatrixBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const FS = 12;
    const CHARS = "01ABCDEFabcdef<>{}[]()+-=*/\\|?!#$%&@^~".split("");
    const FONT = `${FS}px 'Share Tech Mono','Courier New',monospace`;

    const cols = Math.floor(canvas.width / FS);

    type Col = { y: number; speed: number; bright: number; layer: 0 | 1 | 2 };
    const drops: Col[] = Array.from({ length: cols }, (_, i) => ({
      y: Math.random() * -120,
      speed: 0,
      bright: Math.random(),
      layer: (Math.floor(Math.random() * 10) < 2
        ? 2
        : Math.floor(Math.random() * 10) < 5
          ? 1
          : 0) as 0 | 1 | 2,
    }));

    drops.forEach((d) => {
      d.speed =
        d.layer === 0
          ? 0.4 + Math.random() * 0.5
          : d.layer === 1
            ? 0.2 + Math.random() * 0.3
            : 0.08 + Math.random() * 0.15;
    });

    drops.forEach((d) => {
      d.y = Math.random() * -200;
    });

    function draw() {
      ctx!.fillStyle = "rgba(8,8,8,0.07)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      ctx!.font = FONT;

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        const x = i * FS;
        const y = Math.floor(d.y) * FS;
        if (y < -FS) {
          d.y += d.speed;
          continue;
        }

        const char = CHARS[Math.floor(Math.random() * CHARS.length)];

        if (d.layer === 0) {
          ctx!.fillStyle =
            d.bright > 0.6 ? "rgba(255,255,255,0.95)" : "rgba(255,215,0,0.95)";
          ctx!.fillText(char, x, y);
          if (d.y > 1) {
            const body = CHARS[Math.floor(Math.random() * CHARS.length)];
            ctx!.fillStyle = `rgba(200,150,12,${0.2 + d.bright * 0.45})`;
            ctx!.fillText(body, x, y - FS);
          }
        } else if (d.layer === 1) {
          ctx!.fillStyle = `rgba(180,130,10,${0.12 + d.bright * 0.3})`;
          ctx!.fillText(char, x, y);
        } else {
          ctx!.fillStyle = `rgba(140,100,8,${0.04 + d.bright * 0.1})`;
          ctx!.fillText(char, x, y);
        }

        d.y += d.speed;

        if (d.y * FS > canvas!.height) {
          const resetChance = d.layer === 0 ? 0.97 : d.layer === 1 ? 0.94 : 0.9;
          if (Math.random() > resetChance) {
            d.y = -Math.floor(Math.random() * 30);
            d.bright = Math.random();
          }
        }
      }
    }

    const interval = setInterval(draw, 33);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        opacity: 0.18,
        pointerEvents: "none",
      }}
    />
  );
}
