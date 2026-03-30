"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const nextLocale = locale === "en" ? "zh" : "en";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  };

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-200 dark:text-gray-400 dark:hover:bg-gray-800"
      aria-label={locale === "en" ? "切换到中文" : "Switch to English"}
    >
      <Languages size={18} />
      <span className="font-medium">{locale === "en" ? "中文" : "EN"}</span>
    </button>
  );
}
