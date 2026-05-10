import { forwardRef } from 'react';

type ButtonProps = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', disabled, children, ...rest }, ref) => {
    return (
      <button ref={ref} type={type} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
