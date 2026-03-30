import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="pb-16 pt-8 text-sm text-zinc-500 dark:text-gray-500">
      <p>{t("credit")}</p>
      <p className="mt-1 text-xs">{t("inspiration")}</p>
    </footer>
  );
}
