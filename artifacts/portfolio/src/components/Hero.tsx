import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { Icon: Github,   href: "https://github.com/Aleenajomy",                                 label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/aleena-jomy",                            label: "LinkedIn" },
  { Icon: Mail,     href: "https://mail.google.com/mail/?view=cm&to=aleenajomy4@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ position: "relative" }}>
      {/* Brutalist Doodles */}
      <div className="doodle doodle-blue-star" style={{ position: "absolute", top: "10%", left: "4%" }}>★</div>
      <div className="doodle doodle-pink-ring" style={{ position: "absolute", top: "8%", right: "12%" }} />
      <div className="doodle doodle-plus-mark" style={{ position: "absolute", bottom: "14%", right: "8%" }} />
      
      {/* Corner hazard stripe patch */}
      <div style={{
        position: "absolute", zIndex: 0, pointerEvents: "none", top: "40px", left: "20px",
        width: "40px", height: "40px",
        backgroundImage: "repeating-linear-gradient(45deg, var(--ink), var(--ink) 6px, var(--yellow) 6px, var(--yellow) 12px)",
        border: "2px solid var(--ink)"
      }} />

      {/* Bold exclamation mark near CTA */}
      <div style={{ position: "absolute", zIndex: 0, pointerEvents: "none", top: "45%", left: "40%", fontFamily: "'Archivo Black', sans-serif", fontSize: "28px", fontWeight: "900", color: "var(--pink)", transform: "rotate(15deg)" }}>!</div>

      {/* Dashed arrow pointing to photo */}
      <svg width="90" height="40" viewBox="0 0 90 40" style={{ position: "absolute", zIndex: 0, pointerEvents: "none", top: "25%", right: "35%", transform: "rotate(20deg)" }}>
        <path d="M5,20 L75,20" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeDasharray="5,4" />
        <path d="M65,10 L75,20 L65,30" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* ── Left: text col ── */}
      <div className="hero-left">

        {/* Rotated yellow eyebrow */}
        <span className="eyebrow">// Open to work</span>

      {/* Giant headline with squiggly underline doodle */}
      <h1 className="hero-h1" style={{ position: "relative" }}>
        Backend<br />
        that<br />
        <span className="hollow" style={{ position: "relative" }}>
          scales.
          <svg width="100" height="12" viewBox="0 0 70 12" style={{ position: "absolute", zIndex: 0, bottom: "-8px", left: "0", pointerEvents: "none" }}>
            <path d="M2,6 Q18,0 35,6 T68,6" fill="none" stroke="var(--ink)" strokeWidth="3.5" strokeLinecap="round"/>
          </svg>
        </span>
      </h1>

        {/* Description */}
        <p className="hero-desc">
          I'm Aleena — a backend-focused software engineer who builds scalable APIs,
          clean architectures, and full-stack applications using Python, Django, Node.js,
          and React. Security-first. Production-ready.
        </p>

        {/* CTA buttons */}
        <div className="btn-row">
          <a href="#projects" className="btn btn-primary">
            View Work ↓
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=aleenajomy4@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Say Hello
          </a>
        </div>

        {/* Social icons */}
        <div className="social-row">
          <span className="social-label">Find me:</span>
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="social-icon"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* ── Right: photo col ── */}
      <div className="hero-right">
        <div className="photo-wrap">
          {/* Hard black offset shadow */}
          <div className="photo-shadow" />

          {/* Photo frame */}
          <div className="photo-frame">
            <img
              src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/avatar.png`}
              alt="Aleena Jomy"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />

            {/* Name label at bottom */}
            <div className="photo-name">Aleena Jomy</div>
          </div>

          {/* Tape sits OUTSIDE photo-frame so overflow:hidden doesn't clip it */}
          <div className="tape" />
        </div>
      </div>

    </section>
  );
}
