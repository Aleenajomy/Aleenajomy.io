import React from "react";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Database, Zap } from "lucide-react";

const features = [
  {
    icon: <Server style={{ color: "#D96A2B" }} className="w-6 h-6" />,
    title: "Backend Architecture",
    description: "Designing scalable, real-world user-centric systems driven by clean architecture."
  },
  {
    icon: <ShieldCheck style={{ color: "#D96A2B" }} className="w-6 h-6" />,
    title: "Security-First",
    description: "Implementing JWT authentication, RBAC, and OWASP best practices for robust security."
  },
  {
    icon: <Database style={{ color: "#D96A2B" }} className="w-6 h-6" />,
    title: "Data Modeling",
    description: "Structuring complex data relationships and optimizing queries in PostgreSQL and MySQL."
  },
  {
    icon: <Zap style={{ color: "#D96A2B" }} className="w-6 h-6" />,
    title: "RESTful APIs",
    description: "Building efficient, well-documented endpoints for seamless frontend integration."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Section label */}
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: "'Courier Prime', monospace", color: "#D96A2B" }}
          >
            01. Who I Am
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Cinzel', serif", color: "#1A1209", lineHeight: 1.2 }}
          >
            About Me
          </h2>
          {/* Ink underline */}
          <div
            className="h-1 w-24 rounded-full mb-8"
            style={{ background: "linear-gradient(90deg, #D96A2B, #F0944A)" }}
          />

          <div
            className="space-y-5 leading-relaxed text-lg"
            style={{ fontFamily: "'Lora', serif", color: "hsl(25, 20%, 42%)" }}
          >
            <p>
              I am a Computer Science graduate based in Kannur, Kerala, with hands-on experience developing web applications, REST APIs, and database-driven solutions using Python, Django, JavaScript, React, and PostgreSQL.
            </p>
            <p>
              I've built full-stack applications involving authentication, data management, automation, and analytics while applying software development best practices. Familiar with API integration, database optimization, Git, GitHub, and modern development tools.
            </p>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl p-6 group transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "hsl(36, 60%, 99%)",
                border: "1px solid hsl(30, 25%, 87%)",
                boxShadow: "0 2px 10px rgba(107,75,50,0.07)",
                borderLeft: "3px solid #D96A2B",
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: "#FFF3EB" }}
              >
                {feature.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "'Cinzel', serif", color: "#1A1209" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Lora', serif", color: "hsl(25, 20%, 48%)" }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
