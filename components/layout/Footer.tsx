import SmartLink from '@/components/ui/SmartLink';
import { siteConfig } from '@/config/site';

const Footer = () => (
  <footer className="bg-band text-band-muted">
    <div className="container">
      <div className="flex flex-wrap justify-between gap-3 border-t border-[color-mix(in_srgb,var(--band-ink)_12%,transparent)] py-6 text-sm">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <SmartLink
          href="#top"
          className="transition-colors hover:text-band-ink"
        >
          Back to top <span aria-hidden="true">↑</span>
        </SmartLink>
      </div>
    </div>
  </footer>
);

export default Footer;
