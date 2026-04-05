import React from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-sm font-mono text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Backend-Focused <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Software Engineer.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            I'm Aleena Jomy. I specialize in building scalable RESTful APIs, robust backend architectures, and secure web applications using Python and Django.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              View My Work <ChevronRight size={18} />
            </a>
            <a
              href="mailto:aleenajomy4@gmail.com"
              className="px-6 py-3 rounded-md bg-secondary text-foreground font-semibold border border-border flex items-center gap-2 hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
          
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border w-full max-w-md">
            <a href="https://github.com/Aleenajomy" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 -ml-2">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/aleena-jomy" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:aleenajomy4@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl rotate-6 scale-105 border border-primary/20 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-secondary rounded-2xl overflow-hidden border border-border flex items-center justify-center">
              <img 
                src="/avatar.png" 
                alt="Aleena Jomy Abstract Portrait" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
            </div>
            
            {/* Floating tech badges */}
            <div className="absolute -right-8 top-12 bg-background/80 backdrop-blur-md border border-border px-4 py-2 rounded-lg font-mono text-sm shadow-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Python
            </div>
            <div className="absolute -left-8 bottom-24 bg-background/80 backdrop-blur-md border border-border px-4 py-2 rounded-lg font-mono text-sm shadow-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" /> Django REST
            </div>
            <div className="absolute right-4 -bottom-6 bg-background/80 backdrop-blur-md border border-border px-4 py-2 rounded-lg font-mono text-sm shadow-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500" /> PostgreSQL
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
