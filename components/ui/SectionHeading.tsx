type Props = {
  children: React.ReactNode;
  id: string;
};

export default function SectionHeading({ children, id }: Props) {
  return (
    <h2
      id={id}
      className="mb-8 text-sm font-bold uppercase tracking-widest accent-text lg:sr-only"
    >
      {children}
    </h2>
  );
}
