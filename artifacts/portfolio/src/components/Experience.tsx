import React from "react";

const experiences = [
  {
    role:     "Python Django Developer Intern",
    company:  "Zecser Business LLP",
    location: "Remote",
    period:   "Nov 2025 – Jan 2026",
    tag:      "Backend",
    tagColor: "var(--blue)",
    arrowColor: "var(--blue)",
    highlights: [
      "Built and maintained 15+ REST API endpoints using Django REST Framework, supporting ~500 daily requests.",
      "Reduced PostgreSQL query execution time by 25% through SQL optimization, indexing, and query plan analysis.",
      "Accelerated frontend-backend integration by 30% collaborating with React developers on API contracts.",
      "Validated 100% of endpoints using Postman test suites; managed version history across 3+ Git branches.",
    ],
  },
  {
    role:     "Cyber Security Specialist",
    company:  "EdiGlobe",
    location: "Bangalore",
    period:   "Jun 2025 – Aug 2025",
    tag:      "Security",
    tagColor: "var(--pink)",
    arrowColor: "var(--pink)",
    highlights: [
      "Conducted vulnerability assessments and penetration testing on web applications.",
      "Identified critical security vulnerabilities including SQL Injection and XSS.",
      "Utilized OWASP ZAP and Metasploit for security testing.",
      "Recommended and implemented secure coding practices across the team.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ position: "relative" }}>
      {/* Brutalist Doodles */}
      <div className="doodle doodle-dashed-circle" style={{ position: "absolute", top: "8%", right: "8%" }} />
      <div className="doodle doodle-yellow-dot" style={{ position: "absolute", bottom: "10%", left: "5%" }} />

      {/* Rotated outlined square */}
      <div style={{ position: "absolute", zIndex: 0, pointerEvents: "none", top: "25%", left: "15%", width: "36px", height: "36px", border: "3px solid var(--ink)", transform: "rotate(10deg)" }} />

      {/* Halftone dot cluster */}
      <svg width="40" height="40" viewBox="0 0 40 40" style={{ position: "absolute", zIndex: 0, pointerEvents: "none", bottom: "25%", right: "12%" }}>
        <circle cx="10" cy="10" r="3" fill="var(--ink)" />
        <circle cx="20" cy="12" r="3.5" fill="var(--ink)" />
        <circle cx="30" cy="15" r="2.5" fill="var(--ink)" />
        <circle cx="15" cy="25" r="4" fill="var(--ink)" />
        <circle cx="28" cy="28" r="3" fill="var(--ink)" />
      </svg>
      <div className="wrap">

        <div className="section-label">04 — Career</div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="exp-card" style={{ borderTop: `3px solid ${exp.tagColor}` }}>
            <div className="exp-header">
              <div>
                <span className="exp-tag" style={{ background: exp.tagColor, color: "#fff", borderColor: exp.tagColor }}>
                  {exp.tag}
                </span>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company} · {exp.location}</div>
              </div>
              <div className="exp-period">{exp.period}</div>
            </div>
            <div className="exp-body">
              <ul className="exp-list">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="exp-item">
                    <span className="exp-arrow" style={{ color: exp.arrowColor }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
