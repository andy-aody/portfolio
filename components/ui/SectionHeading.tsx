type Props = {
  children: React.ReactNode;
  id: string;
};

export default function SectionHeading({ children, id }: Props) {
  return (
    <h2
      id={id}
      className="mb-8 flex items-center gap-3 text-sm font-bold uppercase tracking-widest accent-text"
    >
      <span className="hidden h-px w-8 bg-violet-600 dark:bg-violet-400 lg:inline-block" />
      {children}
    </h2>
  );
}
