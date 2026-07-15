import React from "react";
import { motion } from "framer-motion";

const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C"],
  Backend: ["Django", "Django REST Framework", "Node.js", "Express.js (Basic)", "REST API Development"],
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB (Basic)", "Query Optimization"],
  Authentication: ["JWT Authentication", "Role-Based Access Control (RBAC)"],
  Concepts: ["MVC Architecture", "OOP", "Data Structures", "Agile Methodologies", "SDLC"],
  Tools: ["Git", "GitHub", "Postman", "Linux", "Docker (Beginner)", "CI/CD (Basic)"]
};

export default function Skills() {
  return (
    <section
      id="skills"
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
            02. What I Know
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Cinzel', serif", color: "#1A1209", lineHeight: 1.2 }}
          >
            Technical Arsenal
          </h2>
          <div
            className="h-1 w-24 rounded-full mt-4"
            style={{ background: "linear-gradient(90deg, #D96A2B, #F0944A)" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "hsl(36, 60%, 99%)",
                border: "1px solid hsl(30, 25%, 87%)",
                boxShadow: "0 2px 10px rgba(107,75,50,0.06)",
              }}
            >
              {/* Category header */}
              <h3
                className="text-base font-bold mb-4 pb-3"
                style={{
                  fontFamily: "'Pirata One', cursive",
                  color: "#D96A2B",
                  fontSize: "1.15rem",
                  letterSpacing: "0.03em",
                  borderBottom: "1px solid hsl(30, 25%, 88%)",
                }}
              >
                {category}
              </h3>
              {/* Skill tags */}
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-sm font-medium transition-all"
                    style={{
                      fontFamily: "'Courier Prime', monospace",
                      backgroundColor: "#FFF3EB",
                      color: "#C05A20",
                      border: "1px solid rgba(217,106,43,0.25)",
                    }}
                  >
                    {skill}
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
