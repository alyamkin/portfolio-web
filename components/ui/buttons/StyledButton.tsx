import { forwardRef } from 'react';
import clsx from 'clsx';

import Button, { ButtonProps } from './Button';
import { buttonStyles, ButtonVariants } from './variants';

type StyledButtonProps = ButtonProps & {
  variant?: ButtonVariants;
  disabled?: boolean;
};

const StyledButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
  ({ className, variant = 'primary', disabled = false, ...rest }, ref) => {
    return (
      <Button
        ref={ref}
        className={clsx(buttonStyles({ variant, disabled }), className)}
        aria-disabled={disabled}
        {...rest}
      />
    );
  },
);

StyledButton.displayName = 'StyledButton';

export default StyledButton;
