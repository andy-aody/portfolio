"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function FloatingControls() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50/80 px-2 py-1.5 shadow-md backdrop-blur-md lg:flex dark:border-gray-700 dark:bg-gray-800/80">
      <ThemeToggle />
      <LanguageSwitcher />
    </div>
  );
}
