/**
 * Shared shapes for the portfolio's content.
 *
 * The values themselves live in `src/data/*`; keeping the types here lets both
 * the data modules and the components that render them agree on one contract.
 */
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  Icon: ComponentType<LucideProps>;
  href: string;
  label: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  tag: string;
  tagColor: string;
  arrowColor: string;
  highlights: string[];
}

export interface Project {
  thumb: string;
  label: string;
  title: string;
  sub: string;
  tech: string;
  desc: string;
  live?: string;
  github?: string;
}

export interface Skill {
  name: string;
  sub: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  accent: string;
}
