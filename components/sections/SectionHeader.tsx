type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <header className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-h6 laptop:text-h5">{title}</h2>
      <p className="text-body font-medium ">{subtitle}</p>
    </header>
  );
};

export default SectionHeader;
