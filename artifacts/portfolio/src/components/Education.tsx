import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Government Engineering College, Wayanad",
    period: "Sep 2022 – Apr 2025",
    grade: "CGPA: 6.57/10"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Residential Women's Polytechnic College, Payyannur",
    period: "Aug 2016 – Apr 2019",
    grade: "CGPA: 6.79/10"
  }
];

const certifications = [
  "The Cybersecurity Threat Landscape",
  "Introduction to Career Skills in Software Development",
  "Foundations of Cybersecurity",
  "Cybersecurity Awareness: Cybersecurity Terminology",
  "How to Become Highly Paid Hacker"
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24"
      style={{ borderBottom: "1px solid hsl(30, 25%, 87%)" }}
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: "'Courier Prime', monospace", color: "#D96A2B" }}
          >
            05. Academic Background
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: "#1A1209", lineHeight: 1.2 }}
          >
            Education
          </h2>
          <div
            className="h-1 w-24 rounded-full mb-10"
            style={{ background: "linear-gradient(90deg, #D96A2B, #F0944A)" }}
          />

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "hsl(36, 60%, 99%)",
                  border: "1px solid hsl(30, 25%, 87%)",
                  boxShadow: "0 2px 10px rgba(107,75,50,0.07)",
                }}
              >
                {/* Decorative corner flourish */}
                <div
                  className="absolute right-0 top-0 w-20 h-20 rounded-bl-full transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "rgba(217,106,43,0.07)" }}
                />

                <GraduationCap
                  className="w-8 h-8 mb-4"
                  style={{ color: "#D96A2B" }}
                />
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "'Cinzel', serif", color: "#1A1209" }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="font-medium mb-1"
                  style={{ fontFamily: "'Lora', serif", color: "hsl(25, 20%, 45%)" }}
                >
                  {edu.institution}
                </p>
                <div
                  className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 text-sm"
                  style={{ borderTop: "1px solid hsl(30, 25%, 88%)" }}
                >
                  <span
                    style={{ fontFamily: "'Courier Prime', monospace", color: "#D96A2B" }}
                  >
                    {edu.period}
                  </span>
                  <span
                    className="px-3 py-1 rounded-md"
                    style={{
                      fontFamily: "'Courier Prime', monospace",
                      backgroundColor: "#FFF3EB",
                      color: "#C05A20",
                      border: "1px solid rgba(217,106,43,0.2)",
                    }}
                  >
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: "'Courier Prime', monospace", color: "#D96A2B" }}
          >
            06. Credentials
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: "#1A1209", lineHeight: 1.2 }}
          >
            Certifications
          </h2>
          <div
            className="h-1 w-24 rounded-full mb-10"
            style={{ background: "linear-gradient(90deg, #D96A2B, #F0944A)" }}
          />

          <div
            className="p-8 rounded-xl"
            style={{
              backgroundColor: "hsl(36, 60%, 99%)",
              border: "1px solid hsl(30, 25%, 87%)",
              boxShadow: "0 2px 10px rgba(107,75,50,0.07)",
            }}
          >
            <ul className="space-y-5">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <Award
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: "#D96A2B" }}
                  />
                  <span
                    className="text-base font-medium leading-snug"
                    style={{ fontFamily: "'Lora', serif", color: "#1A1209" }}
                  >
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
