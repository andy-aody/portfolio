import { useTranslations } from "next-intl";
import { Mail, Github, Linkedin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const t = useTranslations("contact");

  const email: string = t.raw("email");
  const socials = t.raw("socials") as { github: string; linkedin: string };

  return (
    <section id="contact" className="scroll-mt-24 pb-16 lg:pb-24">
      <SectionHeading id="contact-heading">{t("heading")}</SectionHeading>
      <p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-gray-400">
        {t("description")}
      </p>
      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
        >
          <Mail size={18} />
          {email}
        </a>
        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
