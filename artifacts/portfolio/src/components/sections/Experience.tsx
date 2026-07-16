import React from "react";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ position: "relative" }}>
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
