import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

/**
 * Mobile-only accordion. The full desktop layout stacks every section on the
 * page; on phones that means a very long scroll to reach the footer. Here each
 * section becomes a collapsible panel and only one is open at a time, so the
 * page stays short and the footer is always close by.
 *
 * `id` matches the section anchors used by the navbar (#about, #skills, …) so
 * the nav links can open + scroll to the right panel.
 */
const SECTIONS = [
  { id: "about", title: "About", Component: About },
  { id: "skills", title: "Skills & Services", Component: Skills },
  { id: "experience", title: "Experience", Component: Experience },
  { id: "projects", title: "Projects", Component: Projects },
  { id: "education", title: "Education", Component: Education },
  { id: "contact", title: "Contact", Component: Contact },
];

interface MobileSectionsProps {
  /** id of the currently open panel, or null when everything is collapsed. */
  active: string | null;
  /** Toggle a panel open/closed by id. */
  onToggle: (id: string) => void;
}

export default function MobileSections({ active, onToggle }: MobileSectionsProps) {
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isFirstRender = useRef(true);

  // When a panel opens, bring it into view under the sticky header.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (active && itemRefs.current[active]) {
      itemRefs.current[active]!.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [active]);

  return (
    <div className="m-acc">
      {SECTIONS.map(({ id, title, Component }) => {
        const isOpen = active === id;
        return (
          <div
            key={id}
            data-section={id}
            className="m-acc-item"
            ref={(el) => {
              itemRefs.current[id] = el;
            }}
          >
            <button
              type="button"
              className={`m-acc-header${isOpen ? " open" : ""}`}
              aria-expanded={isOpen}
              onClick={() => onToggle(id)}
            >
              <span className="m-acc-title">{title}</span>
              <ChevronDown size={20} className="m-acc-chev" />
            </button>

            {isOpen && (
              <div className="m-acc-body">
                <Component />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
