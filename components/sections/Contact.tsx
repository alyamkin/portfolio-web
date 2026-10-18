import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import clsx from 'clsx';
import type { IconType } from 'react-icons';

import SmartLink from '@/components/ui/SmartLink';
import { siteConfig } from '@/config/site';

type ContactLinkProps = {
  href: string;
  label: string;
  Icon: IconType;
  primary?: boolean;
};

const ContactLink = ({ href, label, Icon, primary }: ContactLinkProps) => (
  <SmartLink
    href={href}
    className={clsx(
      'flex items-center gap-2.5 rounded-xl border px-4 font-semibold transition-colors',
      primary
        ? 'border-band-accent bg-band-accent py-4.5 text-[1.05rem] text-band hover:bg-[color-mix(in_srgb,var(--band-accent)_88%,var(--band-ink))]'
        : 'border-[color-mix(in_srgb,var(--band-ink)_18%,transparent)] py-3.5 hover:border-band-accent hover:bg-[color-mix(in_srgb,var(--band-ink)_5%,transparent)]',
    )}
  >
    <Icon aria-hidden="true" className="size-5 shrink-0" />
    {label}
    <FiArrowUpRight
      aria-hidden="true"
      className={clsx('ml-auto size-4', !primary && 'opacity-60')}
    />
  </SmartLink>
);

const Contact = () => (
  <section
    id="contact"
    aria-labelledby="contact-title"
    className="bg-band text-band-ink"
  >
    <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:py-30">
      <div>
        <h2 id="contact-title" className="text-display">
          Let&apos;s <span className="text-band-accent">connect.</span>
        </h2>
        <p className="mt-4.5 max-w-[44ch] text-lead text-band-muted">
          I&apos;m open to full-time roles. LinkedIn is the fastest way to
          reach me.
        </p>
      </div>
      <div className="grid gap-2.5">
        <ContactLink
          href={siteConfig.links.linkedin}
          label="Message me on LinkedIn"
          Icon={FaLinkedin}
          primary
        />
        <ContactLink
          href={siteConfig.links.github}
          label="GitHub"
          Icon={FaGithub}
        />
      </div>
    </div>
  </section>
);

export default Contact;
