import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

type SmartLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  href: string;
};

const isExternal = (href: string) => /^https?:\/\//.test(href);
const isInPage = (href: string) => href.startsWith('#');

const SmartLink = ({ href, children, ...rest }: SmartLinkProps) => {
  if (isInPage(href)) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
};

export default SmartLink;
