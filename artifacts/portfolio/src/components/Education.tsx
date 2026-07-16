import React from "react";

const education = [
  {
    degree:      "B.Tech — Computer Science & Engineering",
    institution: "Government Engineering College, Wayanad",
    period:      "Sep 2022 – Apr 2025",
    accent:      "var(--blue)",
  },
  {
    degree:      "Diploma — Computer Engineering",
    institution: "Govt Residential Women's Polytechnic, Payyannur",
    period:      "Aug 2016 – Apr 2019",
    accent:      "var(--pink)",
  },
];

const certifications = [
  "Introduction to Career Skills in Software Development",
  "AWS S3 Basics",
  "Using Git with Visual Studio Code",
  "CSS Essentials",
  "AI Fundamentals with IBM SkillsBuild",
  "Programming with Python 3.x",
];

export default function Education() {
  return (
    <section id="education" className="section" style={{ position: "relative" }}>
      {/* Brutalist Doodles */}
      <div className="doodle doodle-blue-star" style={{ position: "absolute", top: "10%", right: "8%" }}>★</div>
      <div className="doodle doodle-plus-mark" style={{ position: "absolute", bottom: "12%", left: "4%" }} />

      {/* Hollow triangle */}
      <svg width="40" height="40" viewBox="0 0 40 40" style={{ position: "absolute", zIndex: 0, pointerEvents: "none", bottom: "15%", right: "12%", transform: "rotate(-25deg)" }}>
        <polygon points="20,4 36,36 4,36" fill="none" stroke="var(--ink)" strokeWidth="3" />
      </svg>

      {/* Asterisk cluster */}
      <div style={{ position: "absolute", zIndex: 0, pointerEvents: "none", top: "15%", left: "15%", fontFamily: "'IBM Plex Mono', monospace", color: "var(--ink)" }}>
        <span style={{ fontSize: "14px", position: "absolute", top: 0, left: 0 }}>*</span>
        <span style={{ fontSize: "20px", position: "absolute", top: "-8px", left: "12px" }}>*</span>
        <span style={{ fontSize: "11px", position: "absolute", top: "10px", left: "6px" }}>*</span>
      </div>
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
