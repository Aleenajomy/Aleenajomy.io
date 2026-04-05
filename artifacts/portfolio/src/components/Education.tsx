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
    <section id="education" className="py-24 border-b border-border">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4">
            <span className="text-primary font-mono text-sm font-normal tracking-widest uppercase">05.</span>
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-xl relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-bl-full transition-transform group-hover:scale-110" />
                <GraduationCap className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground font-medium mb-1">{edu.institution}</p>
                <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-border/50 font-mono text-sm">
                  <span className="text-primary/80">{edu.period}</span>
                  <span className="bg-secondary px-3 py-1 rounded-md text-secondary-foreground">{edu.grade}</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4">
            <span className="text-primary font-mono text-sm font-normal tracking-widest uppercase">06.</span>
            Certifications
          </h2>

          <div className="bg-card border border-border p-8 rounded-xl">
            <ul className="space-y-6">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground font-medium leading-tight">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
