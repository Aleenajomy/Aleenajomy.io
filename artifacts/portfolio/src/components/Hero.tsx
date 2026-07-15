import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

// ── Shared style tokens ────────────────────────────────────────────────────
const BRAND = "#D96A2B";
const MUTED_COLOR = "hsl(25, 20%, 50%)";

const badgeStyle: React.CSSProperties = {
  fontFamily: "'Courier Prime', monospace",
  backgroundColor: "hsl(36, 60%, 99%)",
  border: "1px solid hsl(30, 25%, 85%)",
  color: "#1A1209",
};

// ── Data ──────────────────────────────────────────────────────────────────
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Aleenajomy",
    Icon: Github,
    extraClass: "-ml-2",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aleena-jomy",
    Icon: Linkedin,
    extraClass: "",
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&to=aleenajomy4@gmail.com",
    Icon: Mail,
    extraClass: "",
  },
];

const techBadges = [
  {
    label: "Python",
    dotColor: "#3b82f6",
    posClass: "absolute -right-10 top-10",
  },
  {
    label: "Django REST",
    dotColor: "#22c55e",
    posClass: "absolute -left-10 bottom-24",
  },
  {
    label: "PostgreSQL",
    dotColor: "#eab308",
    posClass: "absolute right-4 -bottom-5",
  },
];

// ── Component ─────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-20 relative overflow-hidden">
      {/* Warm radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217,106,43,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-6"
        >
          {/* Status pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm border"
            style={{
              fontFamily: "'Courier Prime', monospace",
              backgroundColor: "#FFF3EB",
              borderColor: BRAND,
              color: BRAND,
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: BRAND }} />
            Available for new opportunities
          </div>

          {/* Main heading */}
          <div>
            <h1
              className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] mb-2"
              style={{ fontFamily: "'Pirata One', cursive", color: "#1A1209", letterSpacing: "0.02em" }}
            >
              Aleena Jomy
            </h1>
            <div
              className="h-1 w-full rounded-full"
              style={{ background: "linear-gradient(90deg, #D96A2B, #F0944A, transparent)" }}
            />
            <p
              className="text-xl md:text-2xl mt-4 font-medium tracking-widest uppercase"
              style={{ fontFamily: "'Cinzel', serif", color: BRAND, letterSpacing: "0.18em" }}
            >
              Backend-Focused Software Engineer
            </p>
          </div>

          {/* Bio */}
          <p
            className="text-lg leading-relaxed max-w-lg"
            style={{ fontFamily: "'Lora', serif", color: "hsl(25, 20%, 40%)" }}
          >
            I specialize in building scalable RESTful APIs, robust backend architectures, and full-stack web applications using Python, Django, Node.js, and React.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              style={{
                fontFamily: "'Cinzel', serif",
                backgroundColor: BRAND,
                color: "#FFF8F3",
                border: "1px solid #C05A20",
                boxShadow: "0 2px 8px rgba(217,106,43,0.3)",
              }}
            >
              View My Work <ChevronRight size={18} />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
              style={{
                fontFamily: "'Cinzel', serif",
                backgroundColor: "#FFF8F3",
                color: "#1A1209",
                border: "1px solid hsl(30, 25%, 82%)",
              }}
            >
              <ExternalLink size={18} /> View Resume
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-6 mt-6 pt-6 w-full max-w-md"
            style={{ borderTop: "1px solid hsl(30, 25%, 82%)" }}
          >
            {socialLinks.map(({ label, href, Icon, extraClass }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`p-2 transition-all hover:-translate-y-0.5 ${extraClass}`}
                style={{ color: MUTED_COLOR }}
                onMouseEnter={(e) => (e.currentTarget.style.color = BRAND)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED_COLOR)}
              >
                <Icon size={24} />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Photo / Visual side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full max-w-md mx-auto aspect-square">
            {/* Decorative rotated frame */}
            <div
              className="absolute inset-0 rounded-2xl rotate-3 scale-105"
              style={{ border: "2px solid rgba(217,106,43,0.35)", background: "rgba(217,106,43,0.04)" }}
            />
            {/* Photo container */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                backgroundColor: "hsl(36, 60%, 97%)",
                border: "1px solid hsl(30, 25%, 85%)",
                boxShadow: "0 8px 32px rgba(107,75,50,0.12)",
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}avatar.png`}
                alt="Aleena Jomy"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 60px rgba(26,18,9,0.15)" }} />
            </div>

            {/* Floating tech badges */}
            {techBadges.map(({ label, dotColor, posClass }) => (
              <div
                key={label}
                className={`${posClass} px-4 py-2 rounded-lg text-sm flex items-center gap-2 shadow-lg`}
                style={badgeStyle}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dotColor }} />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
