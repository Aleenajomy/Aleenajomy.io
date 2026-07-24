import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" className="contact-section" style={{ position: "relative", paddingBottom: "0" }}>
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
                href={siteConfig.links.mailto}
                style={{ fontSize: "16px", textDecoration: "none", border: "none" }}
              >
                {siteConfig.email}
              </a>
            </div>
            <div style={{ borderBottom: "1.5px solid var(--ink)", paddingBottom: "10px" }}>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "16px", textDecoration: "none", border: "none" }}
              >
                {siteConfig.display.linkedin}
              </a>
            </div>
            <div style={{ borderBottom: "1.5px solid var(--ink)", paddingBottom: "10px" }}>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "16px", textDecoration: "none", border: "none" }}
              >
                {siteConfig.display.github}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
