import React from "react";

export default function About() {
  return (
    <section id="about" className="section" style={{ position: "relative" }}>
      <div className="wrap">
        <div className="section-label">01 — About</div>

        {/* Two-col: bio left, philosophy note right */}
        <div className="about-grid">
          <div>
            <p style={{ fontSize: "17px", lineHeight: 1.7, marginBottom: "20px", fontFamily: "'Space Grotesk', sans-serif" }}>
              I'm a Computer Science graduate based in Kannur, Kerala with hands-on experience building
              web applications, REST APIs, and database-driven systems using Python, Django, JavaScript,
              React, and PostgreSQL.
            </p>
            <p className="hidden md:block" style={{ fontSize: "17px", lineHeight: 1.7, fontFamily: "'Space Grotesk', sans-serif" }}>
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
