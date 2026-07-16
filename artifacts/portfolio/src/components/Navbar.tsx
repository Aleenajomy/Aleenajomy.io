import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Scrolling marquee ── */}
      <div className="marquee-bar">
        <span className="marquee-track">
          BACKEND ENGINEER &nbsp;•&nbsp; FULL-STACK DEV &nbsp;•&nbsp; PYTHON &nbsp;•&nbsp; DJANGO &nbsp;•&nbsp; NODE.JS &nbsp;•&nbsp; REACT &nbsp;•&nbsp; POSTGRESQL &nbsp;•&nbsp; REST APIs &nbsp;•&nbsp; JWT AUTH &nbsp;•&nbsp; OPEN TO WORK &nbsp;•&nbsp;&nbsp;
          BACKEND ENGINEER &nbsp;•&nbsp; FULL-STACK DEV &nbsp;•&nbsp; PYTHON &nbsp;•&nbsp; DJANGO &nbsp;•&nbsp; NODE.JS &nbsp;•&nbsp; REACT &nbsp;•&nbsp; POSTGRESQL &nbsp;•&nbsp; REST APIs &nbsp;•&nbsp; JWT AUTH &nbsp;•&nbsp; OPEN TO WORK &nbsp;•&nbsp;
        </span>
      </div>

      {/* ── Sticky header ── */}
      <header className="site-header">
        <div className="wrap site-nav">

          {/* Logo */}
          <a href="#home" onClick={(e) => scrollTo(e, "#home")} className="logo">
            Aleena Jomy
          </a>

          {/* Desktop nav */}
          <nav className="navlinks" style={{ listStyle: "none", display: "flex" as const }}>
            {navItems.map((n) => (
              <a key={n.label} href={n.href} onClick={(e) => scrollTo(e, n.href)}>
                {n.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ display: "none", background: "none", border: "2px solid var(--ink)", padding: "5px 7px", cursor: "pointer" }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div style={{ borderTop: "2px solid var(--ink)", background: "var(--cream)" }}>
            {navItems.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={(e) => { scrollTo(e, n.href); setOpen(false); }}
                style={{
                  display: "block",
                  padding: "14px 28px",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(19,19,19,.1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--yellow)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
