import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceItemComponent from "@/components/ui/ExperienceItem";
import type { ExperienceItem } from "@/lib/types";

export default function Experience() {
  const t = useTranslations("experience");

  const items: ExperienceItem[] = t.raw("items");

  return (
    <section id="experience" className="scroll-mt-24 pb-16 lg:pb-24">
      <SectionHeading id="experience-heading">{t("heading")}</SectionHeading>
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute bottom-0 left-[5px] top-2 w-px bg-zinc-200 dark:bg-gray-700" />
        {items.map((item, index) => (
          <ExperienceItemComponent
            key={index}
            item={item}
            isFirst={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
