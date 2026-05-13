import clsx from 'clsx';
import { forwardRef } from 'react';

import LinkButton, { LinkButtonProps } from './LinkButton';
import { buttonStyles, ButtonVariants } from './variants';

type StyledLinkButtonProps = LinkButtonProps & {
  variant?: ButtonVariants;
  disabled?: boolean;
};

const StyledLinkButton = forwardRef<HTMLAnchorElement, StyledLinkButtonProps>(
  ({ className, variant = 'primary', disabled = false, ...rest }, ref) => {
    return (
      <LinkButton
        ref={ref}
        className={clsx(buttonStyles({ variant, disabled }), className)}
        aria-disabled={disabled}
        {...rest}
      />
    );
  },
);

StyledLinkButton.displayName = 'StyledLinkButton';

export default StyledLinkButton;
