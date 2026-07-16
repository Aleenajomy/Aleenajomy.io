import React from "react";

export default function About() {
  return (
    <section id="about" className="section" style={{ position: "relative" }}>
      {/* Brutalist Doodles */}
      <div className="doodle doodle-dashed-circle" style={{ position: "absolute", bottom: "10%", left: "5%" }} />
      <div className="doodle doodle-plus-mark" style={{ position: "absolute", top: "15%", right: "8%" }} />
      
      {/* Hollow triangle */}
      <svg width="40" height="40" viewBox="0 0 40 40" style={{ position: "absolute", zIndex: 0, pointerEvents: "none", top: "45%", left: "45%", transform: "rotate(15deg)" }}>
        <polygon points="20,4 36,36 4,36" fill="none" stroke="var(--ink)" strokeWidth="3" />
      </svg>

      {/* Asterisk cluster */}
      <div style={{ position: "absolute", zIndex: 0, pointerEvents: "none", top: "70%", right: "12%", fontFamily: "'IBM Plex Mono', monospace", color: "var(--ink)" }}>
        <span style={{ fontSize: "16px", position: "absolute", top: 0, left: 0 }}>*</span>
        <span style={{ fontSize: "24px", position: "absolute", top: "-10px", left: "15px" }}>*</span>
        <span style={{ fontSize: "12px", position: "absolute", top: "12px", left: "8px" }}>*</span>
      </div>

      <div className="wrap">
        {/* Circle-around-word marker near section label */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <div className="section-label" style={{ marginBottom: "24px" }}>01 — About</div>
          <svg width="140" height="40" viewBox="0 0 140 50" style={{ position: "absolute", zIndex: 0, pointerEvents: "none", top: "-8px", left: "-6px" }}>
            <ellipse cx="70" cy="25" rx="65" ry="20" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeDasharray="3,2" transform="rotate(-2, 70, 25)" />
          </svg>
        </div>

        {/* Two-col: bio left, philosophy note right */}
        <div className="about-grid">
          <div>
            <p style={{ fontSize: "17px", lineHeight: 1.7, marginBottom: "20px", fontFamily: "'Space Grotesk', sans-serif" }}>
              I'm a Computer Science graduate based in Kannur, Kerala with hands-on experience building
              web applications, REST APIs, and database-driven systems using Python, Django, JavaScript,
              React, and PostgreSQL.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.7, fontFamily: "'Space Grotesk', sans-serif" }}>
              I've shipped full-stack apps covering authentication, data management, automation, and analytics —
              applying software best practices throughout. Comfortable with API integration, database optimization,
              Git, and modern dev tooling.
            </p>
          </div>

          {/* Rotated yellow note — exactly like the reference */}
          <div className="note">
            <span className="note-title">My philosophy</span>
            software should be unbreakable, not just functional.
            build for scale from day one — security is architecture,
            not an afterthought. good code explains itself.
          </div>
        </div>

      </div>
    </section>
  );
}
