"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";
import XLogo from "@/components/ui/XLogo";

import { useCallback, useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
] as const;

export default function LeftPanel() {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState("about");
  const rafId = useRef(0);

  const updateActiveSection = useCallback(() => {
    const isAtBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;

    if (isAtBottom) {
      setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1]);
      return;
    }

    const targetLine = window.innerHeight * 0.4;
    let current: string = NAV_ITEMS[0];

    for (const item of NAV_ITEMS) {
      const el = document.getElementById(item);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= targetLine) {
        current = item;
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateActiveSection]);

  const socials = t.raw("contact.socials") as {
    github: string;
    linkedin: string;
    x: string;
  };
  const email: string = t.raw("contact.email");

  return (
    <header className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:max-w-md lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Identity */}
        <h1
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer text-4xl font-medium tracking-tight text-heading"
        >
          {t("hero.name")}
        </h1>
        <h2 className="mt-3 text-lg accent-text">{t("hero.title")}</h2>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">
          {t("hero.tagline")}
        </p>

        {/* Navigation */}
        <nav className="mt-16" aria-label="In-page navigation">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`group flex items-center gap-3 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                    activeSection === item
                      ? "accent-text"
                      : "text-muted hover:text-heading"
                  }`}
                >
                  <span
                    className={`h-px transition-all ${
                      activeSection === item
                        ? "w-16 bg-accent"
                        : "w-8 bg-border group-hover:w-16 group-hover:bg-accent"
                    }`}
                  />
                  {t(`nav.${item}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom: social links + toggles */}
      <div className="flex items-center gap-4">
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-accent"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-accent"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={socials.x}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-accent"
          aria-label="X"
        >
          <XLogo size={20} />
        </a>
        <a
          href={`mailto:${email}`}
          className="text-muted transition-colors hover:text-accent"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </header>
  );
}
