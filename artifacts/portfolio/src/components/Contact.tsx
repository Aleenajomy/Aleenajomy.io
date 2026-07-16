import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="contact-section" style={{ position: "relative", paddingBottom: "0" }}>
      {/* Brutalist Doodles */}
      <div className="doodle doodle-pink-ring" style={{ top: "10%", right: "15%" }} />
      <div className="doodle doodle-plus-mark" style={{ bottom: "25%", left: "8%" }} />
      
      <div className="wrap">
        <div className="foot-grid">
          
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="contact-h2">
              Let's build<br />
              something<br />
              <span className="hollow">loud.</span>
            </h2>
            
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary"
              style={{ padding: "14px 28px", fontSize: "14px" }}
            >
              Download Résumé
            </a>
          </motion.div>

          {/* Right Panel (Contact List with horizontal lines) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-list"
            style={{ width: "100%" }}
          >
            <div style={{ borderBottom: "1.5px solid var(--ink)", paddingBottom: "10px" }}>
              <a 
                href="mailto:aleenajomy4@gmail.com"
                style={{ fontSize: "16px", textDecoration: "none", border: "none" }}
              >
                aleenajomy4@gmail.com
              </a>
            </div>
            <div style={{ borderBottom: "1.5px solid var(--ink)", paddingBottom: "10px" }}>
              <a 
                href="https://linkedin.com/in/aleena-jomy" 
                target="_blank" 
                rel="noreferrer"
                style={{ fontSize: "16px", textDecoration: "none", border: "none" }}
              >
                linkedin.com/in/aleena-jomy
              </a>
            </div>
            <div style={{ borderBottom: "1.5px solid var(--ink)", paddingBottom: "10px" }}>
              <a 
                href="https://github.com/Aleenajomy" 
                target="_blank" 
                rel="noreferrer"
                style={{ fontSize: "16px", textDecoration: "none", border: "none" }}
              >
                github.com/Aleenajomy
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
