import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EducationItem } from "@/lib/types";

export default function Education() {
  const t = useTranslations("education");

  const items: EducationItem[] = t.raw("items");

  return (
    <section id="education" className="scroll-mt-24 pb-16 lg:pb-24">
      <SectionHeading id="education-heading">{t("heading")}</SectionHeading>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index}>
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-gray-500">
              {item.startDate} — {item.endDate}
            </div>
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-gray-100">
                {item.degree}
              </h3>
              <p className="accent-text text-sm font-medium">{item.school}</p>
              {item.description && (
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-gray-400">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
