import React from "react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer style={{ borderTop: "3px solid var(--ink)", padding: "18px 0" }}>
      <div className="wrap">
        <p className="foot-credit">
          © {new Date().getFullYear()} {siteConfig.name.toUpperCase()} — BUILT RAW, NO FRAMEWORK NEEDED.
        </p>
      </div>
    </footer>
  );
}
