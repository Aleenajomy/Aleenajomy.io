/**
 * Single source of truth for the site owner's identity and contact links.
 *
 * Previously these strings were duplicated across Hero, Contact and Footer.
 * Centralising them here means a link only ever changes in one place.
 */

const EMAIL = "aleenajomy4@gmail.com";

export const siteConfig = {
  name: "Aleena Jomy",
  role: "Backend-focused Software Engineer",
  location: "Kannur, Kerala",
  email: EMAIL,
  links: {
    github: "https://github.com/Aleenajomy",
    linkedin: "https://linkedin.com/in/aleena-jomy",
    /** Pre-filled Gmail compose window (used by the Hero CTAs). */
    gmailCompose: `https://mail.google.com/mail/?view=cm&to=${EMAIL}`,
    /** Standard mailto: link (used by the Contact list). */
    mailto: `mailto:${EMAIL}`,
  },
  /** Human-readable versions of the links, shown as link text. */
  display: {
    github: "github.com/Aleenajomy",
    linkedin: "linkedin.com/in/aleena-jomy",
  },
} as const;

export type SiteConfig = typeof siteConfig;
