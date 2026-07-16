import React from "react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "3px solid var(--ink)", padding: "18px 0" }}>
      <div className="wrap">
        <p className="foot-credit">
          © {new Date().getFullYear()} ALEENA JOMY — BUILT RAW, NO FRAMEWORK NEEDED.
        </p>
      </div>
    </footer>
  );
}
