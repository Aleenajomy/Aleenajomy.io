import React from "react";

// 02 — Toolkit  (4-col grid)  +  03 — Services (terminal)
const toolkit = [
  { name: "Python / Django",  sub: "Backend & REST APIs" },
  { name: "React / Node.js",  sub: "Frontend & server" },
  { name: "PostgreSQL / SQL", sub: "Data & optimization" },
  { name: "Git / Docker",     sub: "Versioning & infra" },
  { name: "JavaScript / TS",  sub: "Modern web stack" },
  { name: "JWT / RBAC",       sub: "Auth & security" },
  { name: "Render / Vercel",  sub: "Cloud deployment" },
  { name: "Postman / Linux",  sub: "Dev tooling" },
];

const services = [
  "API design & development",
  "database architecture & optimization",
  "authentication systems (JWT / RBAC)",
  "full-stack web applications",
  "security auditing (OWASP)",
  "performance tuning & indexing",
  "cloud deployment (Render, Vercel)",
  "AI-assisted development",
];

export default function Skills() {
  return (
    <>
      {/* ── 02 — Toolkit ── */}
      <section id="skills" className="section" style={{ position: "relative" }}>
        {/* Brutalist Doodles */}
        <div className="doodle doodle-blue-star" style={{ position: "absolute", top: "15%", right: "6%" }}>★</div>
        <div className="doodle doodle-yellow-dot" style={{ position: "absolute", bottom: "25%", left: "4%" }} />
        
        {/* Bracket pair framing space */}
        <div style={{ position: "absolute", zIndex: 0, pointerEvents: "none", top: "10%", left: "15%", fontFamily: "'Space Grotesk', sans-serif", fontSize: "40px", fontWeight: "bold", color: "rgba(19,19,19,0.3)", width: "100px", display: "flex", justifyContent: "space-between" }}>
          <span>[</span>
          <span>]</span>
        </div>

        <div className="wrap">
          <div className="section-label">02 — Toolkit</div>
          <div className="skill-grid">
            {toolkit.map((t) => (
              <div key={t.name} className="skill-box">
                <span className="skill-name">{t.name}</span>
                {t.sub}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 — Services ── */}
      <section className="section" style={{ position: "relative" }}>
        {/* Brutalist Doodles */}
        <div className="doodle doodle-pink-ring" style={{ position: "absolute", top: "25%", left: "5%" }} />
        <div className="doodle doodle-plus-mark" style={{ position: "absolute", bottom: "20%", right: "8%" }} />
        
        {/* Zigzag / lightning bolt */}
        <svg width="30" height="50" viewBox="0 0 30 50" style={{ position: "absolute", zIndex: 0, pointerEvents: "none", top: "10%", right: "12%" }}>
          <path d="M20,2 L5,28 L25,22 L10,48" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Plus-sign grid */}
        <div style={{ position: "absolute", zIndex: 0, pointerEvents: "none", bottom: "10%", left: "12%", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "14px", color: "rgba(19,19,19,0.3)" }}>
          <span>+</span><span>+</span><span>+</span>
          <span>+</span><span>+</span><span>+</span>
        </div>

        <div className="wrap">
          <div className="section-label">03 — Services</div>
          <div className="terminal">
            <div className="terminal-head">
              <span className="dot" style={{ background: "var(--pink)" }} />
              <span className="dot" style={{ background: "var(--yellow)" }} />
              <span className="dot" style={{ background: "var(--green)" }} />
              <span style={{ marginLeft: "8px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#777" }}>
                services.sh
              </span>
            </div>
            <div className="terminal-body">
              {services.map((s) => (
                <div key={s} className="terminal-item">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
