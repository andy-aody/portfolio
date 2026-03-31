type Props = {
  name: string;
};

export default function SkillBadge({ name }: Props) {
  return (
    <span className="inline-block rounded-full bg-accent-fill px-3 py-1 text-xs font-medium text-accent-text">
      {name}
    </span>
  );
}
