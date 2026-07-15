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
      "Built and maintained 15+ REST API endpoints using Django REST Framework for authentication, user management, and workflow automation, supporting ~500 daily requests.",
      "Reduced PostgreSQL query execution time by 25% through SQL optimization, indexing strategies, and query plan analysis on a database of 10,000+ records.",
      "Accelerated frontend-backend integration by 30% by collaborating with React developers to define API contracts and mock data schemas.",
      "Validated 100% of API endpoints using Postman test suites; managed version history across 3+ Git branches."
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
          className="mb-12"
        >
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: "'Courier Prime', monospace", color: "#D96A2B" }}
          >
            03. Where I've Worked
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Cinzel', serif", color: "#1A1209", lineHeight: 1.2 }}
          >
            Experience
          </h2>
          <div
            className="h-1 w-24 rounded-full mt-4"
            style={{ background: "linear-gradient(90deg, #D96A2B, #F0944A)" }}
          />
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div
                className="rounded-xl p-6 md:p-8 relative group overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "hsl(36, 60%, 99%)",
                  border: "1px solid hsl(30, 25%, 87%)",
                  boxShadow: "0 2px 12px rgba(107,75,50,0.07)",
                }}
              >
                {/* Left orange accent bar */}
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-xl transition-all duration-300 group-hover:w-1.5"
                  style={{ backgroundColor: "#D96A2B" }}
                />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: "'Cinzel', serif", color: "#1A1209" }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      className="flex items-center gap-2 font-medium mt-1"
                      style={{ color: "#D96A2B" }}
                    >
                      <Briefcase size={15} />
                      <span style={{ fontFamily: "'Lora', serif" }}>{exp.company}</span>
                      <span
                        className="text-sm font-normal pl-2 ml-1"
                        style={{
                          fontFamily: "'Courier Prime', monospace",
                          color: "hsl(25, 20%, 50%)",
                          borderLeft: "1px solid hsl(30, 25%, 80%)",
                        }}
                      >
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Date badge */}
                  <div
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full w-fit shrink-0"
                    style={{
                      fontFamily: "'Courier Prime', monospace",
                      backgroundColor: "#FFF3EB",
                      color: "#C05A20",
                      border: "1px solid rgba(217,106,43,0.25)",
                    }}
                  >
                    <Calendar size={13} />
                    {exp.period}
                  </div>
                </div>

                {exp.highlights.length > 0 && (
                  <ul className="space-y-3">
                    {exp.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3"
                        style={{ fontFamily: "'Lora', serif", color: "hsl(25, 20%, 42%)" }}
                      >
                        <span
                          className="mt-1.5 shrink-0 font-bold text-base leading-none"
                          style={{ color: "#D96A2B" }}
                        >
                          ▹
                        </span>
                        <span className="leading-relaxed text-[0.95rem]">{item}</span>
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
