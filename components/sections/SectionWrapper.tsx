import SectionHeader from '@/components/sections/SectionHeader';

type SectionWrapperProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  id?: string;
};

const SectionWrapper = ({
  children,
  title,
  subtitle,
  id,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className="container flex flex-col scroll-mt-24 gap-4 tablet:gap-6"
    >
      <SectionHeader title={title} subtitle={subtitle} />
      {children}
    </section>
  );
};

export default SectionWrapper;
