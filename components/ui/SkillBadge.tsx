import { getCategoryStyle } from "@/components/ui/TechTag";

type Props = {
  name: string;
  categoryName?: string;
};

export default function SkillBadge({ name, categoryName }: Props) {
  const colorClasses = categoryName
    ? getCategoryStyle(categoryName)
    : "bg-accent-fill text-accent-text";

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${colorClasses}`}
    >
      {name}
    </span>
  );
}
