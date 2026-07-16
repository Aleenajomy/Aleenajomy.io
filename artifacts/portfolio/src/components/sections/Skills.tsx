import React from "react";
import { toolkit, services } from "@/data/skills";

export default function Skills() {
  return (
    <>
      {/* ── 02 — Toolkit ── */}
      <section id="skills" className="section" style={{ position: "relative" }}>
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
