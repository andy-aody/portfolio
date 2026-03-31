import { useTranslations } from "next-intl";
import { Mail, Github, Linkedin } from "lucide-react";
import XLogo from "@/components/ui/XLogo";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const t = useTranslations("contact");

  const email: string = t.raw("email");
  const socials = t.raw("socials") as {
    github: string;
    linkedin: string;
    x: string;
  };

  return (
    <section id="contact" className="scroll-mt-24 pb-16 lg:pb-24">
      <SectionHeading id="contact-heading">{t("heading")}</SectionHeading>
      <p className="mb-6 text-sm leading-relaxed text-body">
        {t("description")}
      </p>
      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-heading transition-colors hover:text-accent"
        >
          <Mail size={18} />
          {email}
        </a>
        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
            aria-label="X"
          >
            <XLogo size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
