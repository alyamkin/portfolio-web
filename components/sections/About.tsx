import clsx from 'clsx';

import Section from '@/components/ui/Section';
import { experience } from '@/content/experience';
import { formatIsoDate } from '@/lib/date';

const About = () => (
  <Section id="about" title="About">
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-14">
      <div className="flex min-w-0 flex-col gap-4">
        <h3 className="mb-1 text-[clamp(1.5rem,1.2rem+1vw,1.875rem)] leading-tight tracking-tight">
          From hardware to apps, and now AI
        </h3>
        <p className="max-w-[62ch]">
          I&apos;ve spent 5+ years building web applications with React and
          TypeScript, and mobile apps with React Native. Most of my work is on
          tools that help store teams connect with their customers.
        </p>
        <p className="max-w-[62ch]">
          My path into software wasn&apos;t typical. After studying Information
          Systems, I spent three years leading a team of five technicians who
          kept 20,000+ machines running around the clock in a data center. That
          job taught me reliability, troubleshooting and systems thinking, and
          made me want to build software instead of maintaining hardware.
        </p>
        <p className="max-w-[62ch]">
          Now I&apos;m growing into full-stack development, with a focus on apps
          powered by LLMs and AI agents. I use AI tools like Claude Code every
          day to explore ideas and ship features faster.
        </p>
      </div>

      <div className="flex min-w-0 flex-col gap-5">
        <h3 className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.06em] text-muted">
          Work history
        </h3>
        <ol role="list" className="grid gap-6 border-l-2 border-line pl-5.5">
          {experience.map(({ role, company, start, end }) => (
            <li
              key={`${company}-${start}`}
              className={clsx(
                'relative grid gap-0.5',
                'before:absolute before:top-[0.4em] before:-left-7.5 before:size-3.5 before:rounded-full before:border-2',
                end
                  ? 'before:border-line before:bg-bg'
                  : 'before:border-accent before:bg-accent before:shadow-[0_0_0_4px_var(--accent-soft)]',
              )}
            >
              <strong className="font-semibold">{role}</strong>
              <span className="text-muted">{company}</span>
              <span className="font-mono text-[0.8rem] text-muted tabular-nums">
                <time dateTime={start}>{formatIsoDate(start)}</time> –{' '}
                {end ? (
                  <time dateTime={end}>{formatIsoDate(end)}</time>
                ) : (
                  'Present'
                )}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </Section>
);

export default About;
