import Link from 'next/link';

const links = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contacts', href: '#contacts' },
];

const NavLinks = () => {
  return (
    <nav className="hidden tablet:block" aria-label="Main navigation">
      <ul className="flex gap-6">
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-body-lg font-medium hover:text-accent-hover transition-colors duration-200 focus-ring"
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
