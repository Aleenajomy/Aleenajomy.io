import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, BookOpen } from "lucide-react";

const projects = [
  {
    title: "MoneySuivi – Personal Finance Management Platform",
    year: "2026",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    description: "Full-stack personal finance platform supporting expense tracking, budget management, EMI monitoring, asset tracking, and borrow/lend ledger management. Built 20+ REST API endpoints for transactions, budgets, loans, notifications, auth, and financial analytics. Implemented JWT auth, recurring transaction automation, PWA support, and web push notifications.",
    live: "https://smartexpencetracker-frontend.onrender.com",
    github: null
  },
  {
    title: "Finder – Hyperlocal Worker Discovery Platform",
    year: "2026",
    tech: ["Django", "DRF", "React", "PostgreSQL"],
    description: "Geolocation-based platform enabling discovery of nearby service providers. Developed 10+ REST API endpoints for search, filtering, and efficient data retrieval. Implemented pincode-level filtering logic for accurate location-based results. Deployed on Render and Vercel.",
    live: "https://finder-swart.vercel.app",
    github: null
  },
  {
    title: "ResumeMaker – AI ATS Resume Optimizer",
    year: "2026",
    tech: ["React", "TypeScript", "Django", "PostgreSQL", "LaTeX"],
    description: "AI-powered application producing job-specific, ATS-optimized resumes, reducing manual editing time by ~70%. LaTeX-driven PDF generation with 100% parse accuracy across 5 ATS tools. ATS keyword analysis module increased resume-job match scores by 40 percentage points.",
    live: null,
    github: "https://github.com/Aleenajomy/ResumeMaker"
  },
  {
    title: "Stylo – Virtual Wardrobe Web Application",
    year: "2024-2025",
    tech: ["Django", "React", "MySQL"],
    description: "Wardrobe management with category-based filtering across 6 outfit types. Improved MySQL query performance by 35% through indexing. Real-time wardrobe updates without full page reloads.",
    live: null,
    github: "https://github.com/Aleenajomy/Stylo"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative"
      style={{
        backgroundColor: "hsl(35, 55%, 95%)",
        borderTop: "1px solid hsl(30, 25%, 87%)",
        borderBottom: "1px solid hsl(30, 25%, 87%)",
      }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: "'Courier Prime', monospace", color: "#D96A2B" }}
          >
            04. What I've Built
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Cinzel', serif", color: "#1A1209", lineHeight: 1.2 }}
          >
            Featured Projects
          </h2>
          <div
            className="h-1 w-24 rounded-full mt-4"
            style={{ background: "linear-gradient(90deg, #D96A2B, #F0944A)" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-xl p-8 flex flex-col h-full group transition-all duration-300 hover:-translate-y-2"
              style={{
                backgroundColor: "hsl(36, 60%, 99%)",
                border: "1px solid hsl(30, 25%, 87%)",
                boxShadow: "0 2px 12px rgba(107,75,50,0.07)",
                borderTop: "3px solid transparent",
                // We'll handle the hover border top via a wrapper approach using inline style transition
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderTop = "3px solid #D96A2B";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(217,106,43,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderTop = "3px solid transparent";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(107,75,50,0.07)";
              }}
            >
              {/* Header row */}
              <div className="flex justify-between items-start mb-6">
                <BookOpen
                  className="w-9 h-9"
                  style={{ color: "#D96A2B" }}
                />
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-all hover:-translate-y-0.5"
                      style={{ color: "hsl(25, 20%, 55%)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#D96A2B")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(25, 20%, 55%)")}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-all hover:-translate-y-0.5"
                      style={{ color: "hsl(25, 20%, 55%)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#D96A2B")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(25, 20%, 55%)")}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3
                className="text-xl font-bold mb-3 transition-colors"
                style={{ fontFamily: "'Cinzel', serif", color: "#1A1209" }}
              >
                {project.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-6 flex-grow"
                style={{ fontFamily: "'Lora', serif", color: "hsl(25, 20%, 45%)" }}
              >
                {project.description}
              </p>

              {/* Tech tags */}
              <ul
                className="flex flex-wrap gap-2 mt-auto pt-4"
                style={{ borderTop: "1px solid hsl(30, 25%, 88%)" }}
              >
                {project.tech.map((t, i) => (
                  <li
                    key={i}
                    className="text-xs px-2.5 py-1 rounded"
                    style={{
                      fontFamily: "'Courier Prime', monospace",
                      backgroundColor: "#FFF3EB",
                      color: "#C05A20",
                      border: "1px solid rgba(217,106,43,0.2)",
                    }}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
