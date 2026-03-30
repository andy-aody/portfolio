type Props = {
  name: string;
};

export default function SkillBadge({ name }: Props) {
  return (
    <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
      {name}
    </span>
  );
}
