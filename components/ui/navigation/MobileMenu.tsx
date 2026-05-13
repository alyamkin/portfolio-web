import clsx from 'clsx';

import NavLinks from './NavLinks';
import SocialMediaLinks from '@/components/ui/SocialMediaLinks';

type MobileMenuProps = {
  isOpened: boolean;
};

const MobileMenu = ({ isOpened }: MobileMenuProps) => {
  return (
    <div
      className={clsx(
        `
          absolute
          top-full
          left-0
          w-full
          overflow-hidden
          rounded-b-2xl
          border
          border-border-light
          bg-background-base
          shadow-mobile-menu
          tablet:hidden

          transition-all
          duration-300
          ease-out
        `,
        {
          'max-h-[500px] opacity-100': isOpened,

          'pointer-events-none max-h-0 opacity-0': !isOpened,
        },
      )}
    >
      <div className="flex flex-col gap-6 p-4 items-center">
        <NavLinks variant="mobile" />
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default MobileMenu;
