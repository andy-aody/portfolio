type Props = {
  children: React.ReactNode;
  id: string;
};

export default function SectionHeading({ children, id }: Props) {
  return (
    <h2
      id={id}
      className="mb-8 flex items-center gap-3 text-sm font-medium uppercase tracking-widest accent-text"
    >
      <span className="hidden h-px w-8 bg-accent lg:inline-block" />
      {children}
    </h2>
  );
}
