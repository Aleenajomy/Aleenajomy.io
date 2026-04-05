import React from "react";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Database, Zap } from "lucide-react";

const features = [
  {
    icon: <Server className="text-primary w-6 h-6" />,
    title: "Backend Architecture",
    description: "Designing scalable, real-world user-centric systems driven by clean architecture."
  },
  {
    icon: <ShieldCheck className="text-primary w-6 h-6" />,
    title: "Security-First",
    description: "Implementing JWT authentication, RBAC, and OWASP best practices for robust security."
  },
  {
    icon: <Database className="text-primary w-6 h-6" />,
    title: "Data Modeling",
    description: "Structuring complex data relationships and optimizing queries in PostgreSQL and MySQL."
  },
  {
    icon: <Zap className="text-primary w-6 h-6" />,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
            <span className="text-primary font-mono text-sm font-normal tracking-widest uppercase">01.</span>
            About Me
          </h2>
          
          <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
            <p>
              I am a Software Engineer based in Kerala, India, with hands-on experience building secure and scalable web applications. My core expertise lies in backend development using Python, Django, and Django REST Framework, paired with a solid understanding of frontend integration using React.js.
            </p>
            <p>
              I specialize in developing geolocation-based platforms with advanced search and filtering logic, designing robust database schemas, and ensuring performance optimization. Work driven by clean architecture and a security-first approach is my standard.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
