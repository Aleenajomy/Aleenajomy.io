import React from "react";
import { motion } from "framer-motion";

const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C"],
  Backend: ["Django", "Django REST Framework", "REST API Development", "API Design"],
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  Databases: ["PostgreSQL", "MySQL", "Query Optimization", "Data Modeling"],
  Core: ["Geolocation-Based Systems", "Search & Filtering Logic", "Backend Architecture", "MVC Architecture"],
  Tools: ["Git", "GitHub", "Postman", "Linux", "Docker (Beginner)"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-sm font-normal tracking-widest uppercase">02.</span>
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-lg font-mono text-primary mb-4 pb-2 border-b border-border/50">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li 
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-medium border border-border/50"
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
