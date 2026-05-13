'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from '@/components/ui/navigation/NavLinks';
import SocialMediaLinks from '@/components/ui/SocialMediaLinks';
import MenuToggler from '@/components/ui/MenuToggler';
import MobileMenu from '@/components/ui/navigation/MobileMenu';

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleClick = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <header className="container flex items-center justify-between py-2.5 border-b border-border-light relative">
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
      <SocialMediaLinks className="hidden tablet:flex" />
      <MenuToggler
        isOpened={isOpened}
        onClick={handleToggleClick}
        className="block tablet:hidden"
      />
      <MobileMenu isOpened={isOpened} />
    </header>
  );
};

export default Header;
