import React from "react";
import { ExternalLink, Github } from "lucide-react";

// 3-col grid, colored thumbs matching the exact project details
const projects = [
  {
    thumb:    "var(--pink)",
    label:    "Full-Stack · May 2026",
    title:    "MoneySuivi",
    sub:      "Personal Finance Management Platform",
    tech:     "Node.js · Express · PostgreSQL · Prisma · React",
    desc:     "Engineered a full-stack personal finance app supporting EMI management, budget planning, and financial analytics. Built 20+ REST APIs with JWT, recurring automation, PWA, and push notifications.",
    live:     "https://smartexpencetracker-frontend.onrender.com",
    github:   "https://github.com/Aleenajomy/MoneySuivi",
  },
  {
    thumb:    "var(--blue)",
    label:    "Django · Apr 2026",
    title:    "Finder",
    sub:      "Hyperlocal Worker Discovery Platform",
    tech:     "Django · DRF · PostgreSQL · React",
    desc:     "Developed a hyperlocal worker discovery platform using location-aware search. Implemented pincode-based matching REST APIs with CRUD, optimized PostgreSQL queries, and deployed to Render/Vercel.",
    live:     "https://finder-swart.vercel.app",
    github:   "https://github.com/Aleenajomy/Finder",
  },
  {
    thumb:    "var(--green)",
    label:    "Full-Stack · Feb – Mar 2026",
    title:    "ResumeMaker",
    sub:      "AI ATS Resume Optimizer",
    tech:     "React · TypeScript · Django · PostgreSQL · LaTeX",
    desc:     "Built an AI-powered ATS resume optimizer generating tailored resumes from job descriptions. Designed secure Django REST APIs, PostgreSQL management, and automated LaTeX PDF generation.",
    live:     "https://resume-maker-three-omega.vercel.app",
    github:   "https://github.com/Aleenajomy/ResumeMaker",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ position: "relative" }}>
      {/* Brutalist Doodles */}
      <div className="doodle doodle-pink-ring" style={{ position: "absolute", top: "10%", right: "6%" }} />
      <div className="doodle doodle-plus-mark" style={{ position: "absolute", bottom: "15%", left: "4%" }} />

      {/* Dashed arrow pointing to card */}
      <svg width="90" height="40" viewBox="0 0 90 40" style={{ position: "absolute", zIndex: 0, pointerEvents: "none", top: "15%", left: "15%", transform: "rotate(-15deg)" }}>
        <path d="M5,20 L75,20" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeDasharray="5,4" />
        <path d="M65,10 L75,20 L65,30" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Corner hazard stripe patch */}
      <div style={{
        position: "absolute", zIndex: 0, pointerEvents: "none", bottom: "20px", right: "20px",
        width: "40px", height: "40px",
        backgroundImage: "repeating-linear-gradient(45deg, var(--ink), var(--ink) 6px, var(--yellow) 6px, var(--yellow) 12px)",
        border: "2px solid var(--ink)"
      }} />

      <div className="wrap">
        <div className="section-label">05 — Selected Work</div>

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
