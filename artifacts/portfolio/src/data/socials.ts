import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { SocialLink } from "@/types/content";

export const socials: SocialLink[] = [
  { Icon: Github, href: siteConfig.links.github, label: "GitHub" },
  { Icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
  { Icon: Mail, href: siteConfig.links.gmailCompose, label: "Email" },
];
