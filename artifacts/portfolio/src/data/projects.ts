import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    thumb: "var(--pink)",
    label: "Full-Stack · May 2026",
    title: "MoneySuivi",
    sub: "Personal Finance Management Platform",
    tech: "Node.js · Express · PostgreSQL · Prisma · React",
    desc: "Engineered a full-stack personal finance app supporting EMI management, budget planning, and financial analytics. Built 20+ REST APIs with JWT, recurring automation, PWA, and push notifications.",
    live: "https://smartexpencetracker-frontend.onrender.com",
    github: "https://github.com/Aleenajomy/MoneySuivi",
  },
  {
    thumb: "var(--blue)",
    label: "Django · Apr 2026",
    title: "Finder",
    sub: "Hyperlocal Worker Discovery Platform",
    tech: "Django · DRF · PostgreSQL · React",
    desc: "Developed a hyperlocal worker discovery platform using location-aware search. Implemented pincode-based matching REST APIs with CRUD, optimized PostgreSQL queries, and deployed to Render/Vercel.",
    live: "https://finder-swart.vercel.app",
    github: "https://github.com/Aleenajomy/Finder",
  },
  {
    thumb: "var(--green)",
    label: "Full-Stack · Feb – Mar 2026",
    title: "ResumeMaker",
    sub: "AI ATS Resume Optimizer",
    tech: "React · TypeScript · Django · PostgreSQL · LaTeX",
    desc: "Built an AI-powered ATS resume optimizer generating tailored resumes from job descriptions. Designed secure Django REST APIs, PostgreSQL management, and automated LaTeX PDF generation.",
    live: "https://resume-maker-three-omega.vercel.app",
    github: "https://github.com/Aleenajomy/ResumeMaker",
  },
];
