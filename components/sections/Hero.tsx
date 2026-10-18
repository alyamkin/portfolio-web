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
          'relative mx-auto aspect-square w-full max-w-92 overflow-hidden rounded-full bg-accent-soft',
          'ring-2 ring-accent/40 ring-offset-6 ring-offset-bg shadow-card',
        )}
      >
        <Image
          src={portrait}
          alt="Portrait of Andrey Lyamkin"
          placeholder="blur"
          sizes="(min-width: 400px) 368px, calc(100vw - 2rem)"
          quality={75}
          loading="eager"
          fetchPriority="high"
          className="size-full object-cover dark:brightness-95"
        />
      </div>
    </div>
  </section>
);

export default Hero;
