import clsx from 'clsx';
import Image from 'next/image';
import { FiArrowDown } from 'react-icons/fi';

import portrait from '@/assets/images/portrait.webp';
import ButtonLink from '@/components/ui/ButtonLink';

const Hero = () => (
  <section aria-labelledby="hero-title" className="container">
    <div className="grid items-center gap-10 py-10 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
      <div className="flex min-w-0 flex-col gap-6">
        <h1 id="hero-title" className="text-display">
          Hi, I&apos;m Andrey. I build web apps people{' '}
          <span className="text-accent">enjoy using</span>.
        </h1>
        <p className="max-w-[40ch] text-lead text-muted">
          I&apos;m a software developer who turns complex workflows into simple
          interfaces and ships faster with AI-assisted development.
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#work">
            View projects
            <FiArrowDown aria-hidden="true" className="size-4" />
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Contact me
          </ButtonLink>
        </div>
      </div>

      <div
        className={clsx(
          'relative mx-auto w-full max-w-99',
          'before:absolute before:inset-[4%_6%_8%] before:rounded-full before:bg-[radial-gradient(closest-side,var(--halo)_62%,transparent)]',
          'dark:aspect-square dark:max-w-84 dark:overflow-hidden dark:rounded-full dark:bg-(--halo) dark:ring-2 dark:ring-accent/50 dark:ring-offset-6 dark:ring-offset-bg dark:before:hidden',
        )}
      >
        <Image
          src={portrait}
          alt="Pencil-style portrait of Andrey Lyamkin"
          sizes="(min-width: 448px) 396px, calc(100vw - 2rem)"
          quality={60}
          loading="eager"
          fetchPriority="high"
          className="relative h-auto w-full [mask-image:radial-gradient(closest-side_at_50%_52%,#000_72%,transparent)] dark:mask-none dark:brightness-90"
        />
      </div>
    </div>
  </section>
);

export default Hero;
