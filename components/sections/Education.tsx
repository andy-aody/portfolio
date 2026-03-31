import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import type { EducationItem } from "@/lib/types";

export default function Education() {
  const t = useTranslations("education");

  const items: EducationItem[] = t.raw("items");

  return (
    <section id="education" className="scroll-mt-24 pb-16 lg:pb-24">
      <SectionHeading id="education-heading">{t("heading")}</SectionHeading>
      <div className="rounded-2xl border border-border bg-card p-6 backdrop-blur-sm">
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index}>
              <div className="mb-1 text-xs font-medium uppercase tracking-wide text-muted">
                {item.startDate} — {item.endDate}
              </div>
              <div>
                <h3 className="text-base font-medium text-heading">
                  {item.degree}
                </h3>
                <p className="accent-text text-sm">{item.school}</p>
                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
