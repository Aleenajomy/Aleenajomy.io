import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Python Django Developer Intern",
    company: "Zecser Business LLP",
    location: "Remote",
    period: "Nov 2025 – Jan 2026",
    highlights: [
      "Built and maintained 15+ REST API endpoints using Django REST Framework.",
      "Reduced PostgreSQL query execution time by 25% through SQL optimization.",
      "Accelerated frontend-backend integration by 30%.",
      "Validated 100% of API endpoints using Postman."
    ]
  },
  {
    role: "Cyber Security Specialist",
    company: "EdiGlobe",
    location: "Bangalore",
    period: "Jun 2025 – Aug 2025",
    highlights: [
      "Conducted vulnerability assessments and penetration testing on web applications.",
      "Identified critical security vulnerabilities including SQL Injection and XSS.",
      "Utilized OWASP ZAP and Metasploit for security testing.",
      "Recommended and implemented secure coding practices."
    ]
  },
  {
    role: "Quality Inspector",
    company: "SFO Technologies",
    location: "Bengaluru",
    period: "Feb 2022 – Mar 2022",
    highlights: []
  },
  {
    role: "Quality Controller",
    company: "SS Technology",
    location: "Mysore",
    period: "May 2019 – Jun 2021",
    highlights: []
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-sm font-normal tracking-widest uppercase">03.</span>
            Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line - visible mostly on desktop if we adjust layout, but keeping it simple block here */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-colors relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium mt-1">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                      <span className="text-muted-foreground font-normal text-sm border-l border-border pl-2 ml-2">{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono bg-secondary px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                {exp.highlights.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
