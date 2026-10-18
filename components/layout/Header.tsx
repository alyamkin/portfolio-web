import ButtonLink from '@/components/ui/ButtonLink';
import SmartLink from '@/components/ui/SmartLink';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { navItems, siteConfig } from '@/config/site';

const Header = () => (
  <header className="sticky top-0 z-20 border-b border-line bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] backdrop-blur-md backdrop-saturate-150">
    <div className="container flex items-center justify-between gap-4 py-3.5">
      <SmartLink
        href="#top"
        className="font-display text-lg font-semibold tracking-tight"
      >
        {siteConfig.name}
      </SmartLink>

      <nav aria-label="Main" className="hidden md:block">
        <ul role="list" className="flex gap-1">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <SmartLink
                href={href}
                className="rounded-lg px-3 py-2 text-[0.95rem] font-medium text-muted transition-colors hover:bg-accent-soft hover:text-ink"
              >
                {label}
              </SmartLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <ButtonLink href="#contact" size="sm">
          Get in touch
        </ButtonLink>
      </div>
    </div>
  </header>
);

export default Header;
