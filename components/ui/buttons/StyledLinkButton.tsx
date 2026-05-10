import { forwardRef } from 'react';

import LinkButton, { LinkButtonProps } from './LinkButton';
import { getButtonClasses, ButtonVariants } from './getButtonClasses';

type StyledLinkButtonProps = LinkButtonProps & {
  variant?: ButtonVariants;
  disabled?: boolean;
};

const StyledLinkButton = forwardRef<HTMLAnchorElement, StyledLinkButtonProps>(
  ({ className, variant = 'primary', disabled = false, ...rest }, ref) => {
    return (
      <LinkButton
        ref={ref}
        className={getButtonClasses(variant, disabled, className)}
        aria-disabled={disabled}
        {...rest}
      />
    );
  },
);

StyledLinkButton.displayName = 'StyledLinkButton';

export default StyledLinkButton;
