import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-primary font-mono font-bold text-xl tracking-tight">
          ALEENA.
        </div>
        
        <p className="text-muted-foreground text-sm font-mono text-center">
          Built with React & Tailwind. Engineered by Aleena Jomy.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Aleenajomy" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/aleena-jomy" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:aleenajomy4@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
