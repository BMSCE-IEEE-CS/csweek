"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAnglesRight } from "react-icons/fa6";
import Image from "next/image";

const CENTER: React.CSSProperties = {
  width: "100%",
  maxWidth: "1152px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "1.25rem",
  paddingRight: "1.25rem",
};

const navLinks = [
  { label: "HOME", href: "#hero" },
  { label: "EVENTS", href: "#events" },
  { label: "COLLABS", href: "#collabs" },
  { label: "HACKATHON", href: "/synthverse" },
  { label: "TIMELINE", href: "#timeline" },
  { label: "ABOUT", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        overflowX: "hidden",
        transition:
          "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
        background: scrolled ? "rgba(6,6,6,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(200,150,12,0.15)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.6)" : "none",
      }}
    >
      {scrolled && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(200,150,12,0.6) 20%, rgba(255,215,0,0.8) 50%, rgba(200,150,12,0.6) 80%, transparent)",
          }}
        />
      )}

      <div
        className="flex items-center justify-between"
        style={{ ...CENTER, paddingTop: "0.75rem", paddingBottom: "0.75rem" }}
      >
        <a href="#hero" className="flex items-center gap-3 no-underline">
          <Image
            src="/logo.png"
            alt="BMSCE IEEE CS"
            className="shrink-0 object-contain"
            width={38}
            height={38}
          />
          <div>
            <div
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontSize: "0.9rem",
                fontWeight: 900,
                letterSpacing: "0.1em",
                lineHeight: 1.2,
                background: "linear-gradient(135deg,#c8960c,#FFD700,#c8960c)",
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
                fontSize: "10px",
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                marginTop: "1px",
              }}
            >
              CS WEEK 2026
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              onMouseEnter={() => setActiveLink(link.href)}
              onMouseLeave={() => setActiveLink("")}
              className="relative no-underline transition-colors duration-200"
              style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: "10px",
                letterSpacing: "0.1em",
                padding: "0.5rem 0.75rem",
                color:
                  activeLink === link.href
                    ? "var(--gold-light)"
                    : "var(--text-secondary)",
              }}
            >
              {link.label}
              <motion.div
                className="absolute bottom-0 left-3 right-3 h-px"
                style={{
                  background: "var(--gold-mid)",
                  transformOrigin: "center",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeLink === link.href ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}

          <motion.a
            href="#events"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 ml-2 no-underline whitespace-nowrap"
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontSize: "9px",
              fontWeight: 900,
              letterSpacing: "0.12em",
              padding: "8px 18px",
              background: "linear-gradient(135deg,#8B6914,#FFD700 50%,#C8960C)",
              color: "#080808",
              clipPath: "polygon(7px 0%,100% 0%,calc(100% - 7px) 100%,0% 100%)",
              boxShadow: "0 0 20px rgba(200,150,12,0.3)",
            }}
          >
            REGISTER <FaAnglesRight />
          </motion.a>
        </div>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex md:hidden flex-col items-center justify-center gap-1 cursor-pointer"
          style={{
            background: "none",
            border: "1px solid rgba(200,150,12,0.3)",
            padding: "7px 9px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                mobileOpen
                  ? {
                      rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                      y: i === 0 ? 6 : i === 2 ? -6 : 0,
                      opacity: i === 1 ? 0 : 1,
                    }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.22 }}
              className="block"
              style={{
                width: "16px",
                height: "1.5px",
                background: "var(--gold-mid)",
              }}
            />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(6,6,6,0.98)",
              borderTop: "1px solid rgba(200,150,12,0.12)",
            }}
          >
            <div
              className="flex flex-col gap-1"
              style={{
                ...CENTER,
                paddingTop: "0.75rem",
                paddingBottom: "1.25rem",
              }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 no-underline py-2.5 transition-colors duration-200"
                  style={{
                    fontFamily: "'Share Tech Mono',monospace",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "var(--text-secondary)",
                    borderBottom: "1px solid rgba(200,150,12,0.07)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--gold-light)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  <span style={{ color: "var(--gold-dark)", fontSize: "9px" }}>
                    ▸
                  </span>
                  {link.label}
                </motion.a>
              ))}

              <a
                href="#events"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 mt-3 no-underline"
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: "0.1em",
                  padding: "11px",
                  background: "linear-gradient(135deg,#8B6914,#FFD700)",
                  color: "#080808",
                  clipPath:
                    "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
                }}
              >
                REGISTER <FaAnglesRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
