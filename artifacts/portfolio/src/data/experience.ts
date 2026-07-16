import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    role: "Python Django Developer Intern",
    company: "Zecser Business LLP",
    location: "Remote",
    period: "Nov 2025 – Jan 2026",
    tag: "Backend",
    tagColor: "var(--blue)",
    arrowColor: "var(--blue)",
    highlights: [
      "Built and maintained 15+ REST API endpoints using Django REST Framework, supporting ~500 daily requests.",
      "Reduced PostgreSQL query execution time by 25% through SQL optimization, indexing, and query plan analysis.",
      "Accelerated frontend-backend integration by 30% collaborating with React developers on API contracts.",
      "Validated 100% of endpoints using Postman test suites; managed version history across 3+ Git branches.",
    ],
  },
  {
    role: "Cyber Security Specialist",
    company: "EdiGlobe",
    location: "Bangalore",
    period: "Jun 2025 – Aug 2025",
    tag: "Security",
    tagColor: "var(--pink)",
    arrowColor: "var(--pink)",
    highlights: [
      "Conducted vulnerability assessments and penetration testing on web applications.",
      "Identified critical security vulnerabilities including SQL Injection and XSS.",
      "Utilized OWASP ZAP and Metasploit for security testing.",
      "Recommended and implemented secure coding practices across the team.",
    ],
  },
];
