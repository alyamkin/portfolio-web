import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';
import SocialMediaLinks from '@/components/ui/SocialMediaLinks';

const Header = () => {
  return (
    <header className="container flex items-center justify-between py-2.5 border-b border-border-base">
      <Link href="/" className="shrink-0 focus-ring">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={70}
          height={44}
          priority
        />
      </Link>
      <NavLinks />
      <SocialMediaLinks />
    </header>
  );
};

export default Header;
