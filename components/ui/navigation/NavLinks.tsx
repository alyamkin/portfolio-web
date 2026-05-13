import Link from 'next/link';

import clsx from 'clsx';

const links = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contacts', href: '#contacts' },
];

const NavLinks = ({
  variant = 'default',
}: {
  variant?: 'default' | 'mobile';
}) => {
  return (
    <nav
      className={clsx('tablet:block', {
        block: variant === 'mobile',
        hidden: variant === 'default',
      })}
      aria-label="Main navigation"
    >
      <ul
        className={clsx('flex items-center gap-4', {
          'flex-col': variant === 'mobile',
        })}
      >
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-body-lg font-medium transition-colors duration-200 focus-ring hover:text-accent-hover"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
