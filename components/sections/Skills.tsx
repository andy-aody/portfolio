import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import type { SkillCategory } from "@/lib/types";

export default function Skills() {
  const t = useTranslations("skills");

  const categories: SkillCategory[] = t.raw("categories");

  return (
    <section id="skills" className="scroll-mt-24 pb-16 lg:pb-24">
      <SectionHeading id="skills-heading">{t("heading")}</SectionHeading>
      <div className="space-y-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="rounded-xl bg-zinc-50 p-4 dark:bg-gray-800/40"
          >
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-800 dark:text-gray-200">
              <span className="inline-block h-2 w-2 rounded-full bg-violet-500 dark:bg-violet-400" />
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <SkillBadge key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
