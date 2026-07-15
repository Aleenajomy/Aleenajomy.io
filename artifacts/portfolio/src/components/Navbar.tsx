import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ── Constants ──────────────────────────────────────────────────────────────
const BRAND = "#D96A2B";
const NAV_COLOR = "hsl(25, 40%, 25%)";
const NAV_COLOR_MOBILE = "hsl(25, 40%, 20%)";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const HIRE_ME_HREF = "https://mail.google.com/mail/?view=cm&to=aleenajomy4@gmail.com";

// Hover helpers
const hoverOn = (e: React.MouseEvent<HTMLAnchorElement>) =>
  (e.currentTarget.style.color = BRAND);
const hoverOff =
  (base: string) => (e: React.MouseEvent<HTMLAnchorElement>) =>
    (e.currentTarget.style.color = base);

// ── Component ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 border-b" : "bg-transparent py-5"
      }`}
      style={
        isScrolled
          ? {
              backgroundColor: "rgba(250, 248, 244, 0.92)",
              backdropFilter: "blur(12px)",
              borderColor: "hsl(30, 25%, 85%)",
            }
          : {}
      }
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="font-display text-2xl tracking-wide transition-opacity hover:opacity-80"
          style={{ color: BRAND, fontFamily: "'Pirata One', cursive" }}
        >
          Aleena.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="font-heading text-sm font-medium tracking-wider transition-colors"
              style={{ fontFamily: "'Cinzel', serif", color: NAV_COLOR, letterSpacing: "0.08em" }}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff(NAV_COLOR)}
            >
              {item.name}
            </a>
          ))}
          <a
            href={HIRE_ME_HREF}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-md text-sm font-semibold tracking-wider transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            style={{
              fontFamily: "'Cinzel', serif",
              backgroundColor: BRAND,
              color: "#FFF8F3",
              border: "1px solid #C05A20",
            }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md transition-colors"
          style={{ color: NAV_COLOR_MOBILE }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 shadow-lg p-6 flex flex-col gap-4 md:hidden border-b"
            style={{ backgroundColor: "hsl(36, 60%, 99%)", borderColor: "hsl(30, 25%, 85%)" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className="text-lg font-medium transition-colors"
                style={{ fontFamily: "'Cinzel', serif", color: NAV_COLOR_MOBILE }}
                onMouseEnter={hoverOn}
                onMouseLeave={hoverOff(NAV_COLOR_MOBILE)}
              >
                {item.name}
              </a>
            ))}
            <a
              href={HIRE_ME_HREF}
              target="_blank"
              rel="noreferrer"
              className="mt-2 px-5 py-3 rounded-md text-center font-semibold transition-colors"
              style={{ fontFamily: "'Cinzel', serif", backgroundColor: BRAND, color: "#FFF8F3" }}
            >
              Hire Me
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
