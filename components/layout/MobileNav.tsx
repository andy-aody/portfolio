"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
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

  return (
    <div className="lg:hidden">
      {/* Top bar */}
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-zinc-200 bg-zinc-50/80 px-6 py-4 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
        <div>
          <p className="text-sm font-bold text-zinc-900 dark:text-gray-100">
            {t("hero.name")}
          </p>
          <p className="text-xs accent-text">{t("hero.title")}</p>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-1 rounded-lg p-2 text-zinc-600 hover:bg-zinc-200 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label={isOpen ? t("mobileNav.close") : t("mobileNav.menu")}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[65px] z-40 border-b border-zinc-200 bg-zinc-50/95 px-6 py-4 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/95">
          <nav>
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-sm font-medium text-zinc-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
                  >
                    {t(`nav.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
