import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{
        backgroundColor: "hsl(36, 60%, 99%)",
        borderTop: "2px solid #D96A2B",
      }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo — Blackletter */}
        <div
          className="text-2xl tracking-wide"
          style={{ fontFamily: "'Pirata One', cursive", color: "#D96A2B" }}
        >
          Aleena.
        </div>

        {/* Credit text */}
        <p
          className="text-sm text-center"
          style={{
            fontFamily: "'Courier Prime', monospace",
            color: "hsl(25, 20%, 50%)",
          }}
        >
          Crafted with React & Tailwind · Engineered by Aleena Jomy
        </p>

        {/* Social links */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Aleenajomy"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md transition-all hover:-translate-y-0.5"
            style={{ color: "hsl(25, 20%, 52%)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D96A2B")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(25, 20%, 52%)")}
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/aleena-jomy"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md transition-all hover:-translate-y-0.5"
            style={{ color: "hsl(25, 20%, 52%)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D96A2B")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(25, 20%, 52%)")}
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:aleenajomy4@gmail.com"
            className="p-2 rounded-md transition-all hover:-translate-y-0.5"
            style={{ color: "hsl(25, 20%, 52%)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D96A2B")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(25, 20%, 52%)")}
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
