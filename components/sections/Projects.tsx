import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import type { ProjectItem } from "@/lib/types";

export default function Projects() {
  const t = useTranslations("projects");

  const items: ProjectItem[] = t.raw("items");

  return (
    <section id="projects" className="scroll-mt-24 pb-16 lg:pb-24">
      <SectionHeading id="projects-heading">{t("heading")}</SectionHeading>
      <div>
        {items.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </section>
  );
}
