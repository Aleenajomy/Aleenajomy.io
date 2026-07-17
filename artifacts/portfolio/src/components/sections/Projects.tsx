import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ position: "relative" }}>


      <div className="wrap">
        <div className="section-label">05 — Selected Work</div>
        <div className="swipe-hint">Swipe for more →</div>

        <div className="proj-grid">
          {projects.map((p) => (
            <div key={p.title} className="proj-card">
              {/* Colored thumbnail block */}
              <div className="proj-thumb" style={{ background: p.thumb }}>
                {p.label}
              </div>

              <div className="proj-body">
                <div className="proj-title">{p.title}</div>
                <div className="proj-sub" style={{ fontWeight: "bold", marginBottom: "8px" }}>{p.sub}</div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", lineHeight: "1.5", marginBottom: "12px", color: "var(--ink)", opacity: 0.85 }}>
                  {p.desc}
                </p>
                <div className="proj-sub" style={{ opacity: .55, fontSize: "11.5px", marginBottom: "0" }}>{p.tech}</div>

                <div className="proj-tags" style={{ marginTop: "14px" }}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="proj-tag">
                      <ExternalLink size={11} /> Live
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="proj-tag">
                      <Github size={11} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
