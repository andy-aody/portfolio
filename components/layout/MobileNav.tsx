"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import XLogo from "@/components/ui/XLogo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const NAV_ITEMS = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
] as const;

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  const socials = t.raw("contact.socials") as {
    github: string;
    linkedin: string;
    x: string;
  };
  const email: string = t.raw("contact.email");

  return (
    <div className="lg:hidden">
      {/* Top bar */}
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-border bg-page/80 px-6 py-4 backdrop-blur-md">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-left"
        >
          <p className="text-sm font-medium text-heading">{t("hero.name")}</p>
          <p className="text-xs accent-text">{t("hero.title")}</p>
        </button>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-1 rounded-lg p-2 text-body hover:bg-surface"
            aria-label={isOpen ? t("mobileNav.close") : t("mobileNav.menu")}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[65px] z-40 border-b border-border bg-page/95 px-6 py-4 backdrop-blur-md">
          <nav>
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-sm font-medium text-heading hover:text-accent"
                  >
                    {t(`nav.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
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
        </div>
      )}
    </div>
  );
}
