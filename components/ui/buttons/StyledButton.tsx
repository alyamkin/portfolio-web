'use client';

import { forwardRef } from 'react';

import Button, { ButtonProps } from './Button';
import { getButtonClasses, ButtonVariants } from './getButtonClasses';

type StyledButtonProps = ButtonProps & {
  variant?: ButtonVariants;
  disabled?: boolean;
};

const StyledButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
  ({ className, variant = 'primary', disabled = false, ...rest }, ref) => {
    return (
      <Button
        ref={ref}
        className={getButtonClasses(variant, disabled, className)}
        aria-disabled={disabled}
        {...rest}
      />
    );
  },
);

StyledButton.displayName = 'StyledButton';

export default StyledButton;
