import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Finder – Hyperlocal Worker Discovery Platform",
    year: "2026",
    tech: ["Django", "DRF", "React", "PostgreSQL"],
    description: "Geolocation-based platform enabling discovery of nearby service providers. Developed 10+ REST API endpoints for search, filtering, and efficient data retrieval. Implemented pincode-level filtering logic for accurate location-based results.",
    live: "https://finder-swart.vercel.app",
    github: null
  },
  {
    title: "ResumeMaker – AI ATS Resume Optimizer",
    year: "2026",
    tech: ["React", "TypeScript", "Django", "PostgreSQL", "LaTeX"],
    description: "AI-powered application producing job-specific, ATS-optimized resumes. Reduces manual editing time by ~70%. LaTeX-driven PDF generation with 100% parse accuracy across 5 ATS tools. 8 REST APIs supporting profile storage, JWT auth, and async generation.",
    live: null,
    github: "https://github.com/Aleenajomy/ResumeMaker"
  },
  {
    title: "Job Portal Web Application",
    year: "2025",
    tech: ["Django", "DRF", "React", "PostgreSQL"],
    description: "Full-stack recruitment system supporting 3 user roles (employer, applicant, admin). 12 REST API endpoints for job postings, application tracking, profile management. JWT authentication and RBAC; validated with 30+ Postman test cases.",
    live: null,
    github: "https://github.com/Aleenajomy/Job-portal"
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
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-sm font-normal tracking-widest uppercase">04.</span>
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <div className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </div>
              
              <ul className="flex flex-wrap gap-3 font-mono text-xs text-primary/80 mt-auto pt-4 border-t border-border/50">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
