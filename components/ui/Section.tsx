import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
};

const Section = ({ id, title, description, children }: SectionProps) => {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className="container">
      <div className="grid gap-8 border-t border-line py-14 md:py-20 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14 lg:py-26">
        <header className="flex flex-col gap-2.5 lg:sticky lg:top-26 lg:self-start">
          <h2 id={titleId} className="text-h2">
            {title}
          </h2>
          {description && (
            <p className="max-w-[32ch] text-muted">{description}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
