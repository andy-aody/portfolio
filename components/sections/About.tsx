import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const t = useTranslations("about");

  const paragraphs: string[] = t.raw("paragraphs");

  return (
    <section id="about" className="scroll-mt-24 pb-16 lg:pb-24">
      <SectionHeading id="about-heading">{t("heading")}</SectionHeading>
      <div className="mb-8 flex justify-start">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-violet-200 dark:border-violet-500/30">
          <Image
            src="/images/avatar.jpg"
            alt={t("heading")}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm leading-relaxed text-zinc-600 dark:text-gray-400"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
