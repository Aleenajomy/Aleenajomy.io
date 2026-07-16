import React from "react";
import { education, certifications } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">

        <div className="section-label">06 — Education</div>

        <div className="nb-edu-grid">

          {/* Academic record */}
          <div>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--pink)", fontWeight: 600, marginBottom: "20px" }}>
              // Academic Record
            </p>
            {education.map((edu, i) => (
              <div
                key={i}
                className="edu-card"
                style={{ borderTop: `3px solid ${edu.accent}`, boxShadow: `5px 5px 0 ${edu.accent}` }}
              >
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-inst">{edu.institution}</div>
                <span className="edu-period">{edu.period}</span>
              </div>
            ))}
          </div>

          {/* Certifications — terminal */}
          <div>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--blue)", fontWeight: 600, marginBottom: "20px" }}>
              // Certifications
            </p>
            <div className="terminal">
              <div className="terminal-head">
                <span className="dot" style={{ background: "var(--pink)" }} />
                <span className="dot" style={{ background: "var(--yellow)" }} />
                <span className="dot" style={{ background: "var(--green)" }} />
              </div>
              <div className="terminal-body">
                {certifications.map((c) => (
                  <div key={c} className="terminal-item">{c}</div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
