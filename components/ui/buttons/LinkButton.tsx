import { forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';

export type LinkButtonProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ children, href, ...rest }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        role="button"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </Link>
    );
  },
);

LinkButton.displayName = 'LinkButton';

export default LinkButton;
