import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const t = useTranslations("about");

  const paragraphs: string[] = t.raw("paragraphs");

  return (
    <section id="about" className="scroll-mt-24 pb-16 lg:pb-24">
      <SectionHeading id="about-heading">{t("heading")}</SectionHeading>
      <div className="rounded-2xl border border-zinc-200/60 bg-white/50 p-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-800/30">
        <div className="mb-8 flex justify-start">
          <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-violet-400/30 ring-offset-2 ring-offset-zinc-50 dark:ring-offset-gray-900">
            <Image
              src="/images/avatar.jpg"
              alt={t("heading")}
              fill
              className="object-cover shadow-lg shadow-violet-500/10"
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
      </div>
    </section>
  );
}
