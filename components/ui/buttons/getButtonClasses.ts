import { cva } from 'class-variance-authority';
import clsx from 'clsx';

export type ButtonVariants = 'primary' | 'secondary' | 'icon';

const buttonStyles = cva(
  `
    inline-flex items-center justify-center
    rounded-lg
    transition-colors
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-accent-base
    focus-visible:ring-offset-2
  `,
  {
    variants: {
      variant: {
        primary: `
          px-6 py-3
          text-body font-medium
          bg-accent-base text-white
        `,

        secondary: `
          px-6 py-3
          text-body font-medium
          border-2 border-border-base
          text-text-primary
        `,

        icon: `
          p-1.5
          rounded-md
          text-text-secondary
        `,
      },

      disabled: {
        true: 'cursor-not-allowed pointer-events-none',
        false: 'cursor-pointer',
      },
    },

    compoundVariants: [
      {
        variant: 'primary',
        disabled: false,
        class: 'hover:bg-accent-hover active:bg-accent-active',
      },

      {
        variant: 'secondary',
        disabled: false,
        class: 'hover:bg-surface-hover active:bg-surface-active',
      },

      {
        variant: 'icon',
        disabled: false,
        class: `
          hover:bg-surface-hover
          hover:text-text-primary
          active:bg-surface-active
          active:text-text-primary
        `,
      },

      {
        variant: 'primary',
        disabled: true,
        class: 'bg-accent-disabled text-white',
      },

      {
        variant: 'secondary',
        disabled: true,
        class: `
          border-border-disabled
          text-text-disabled
          bg-surface-disabled
        `,
      },

      {
        variant: 'icon',
        disabled: true,
        class: 'text-text-disabled',
      },
    ],

    defaultVariants: {
      variant: 'primary',
      disabled: false,
    },
  },
);

export function getButtonClasses(
  variant: ButtonVariants,
  disabled = false,
  className?: string,
) {
  return clsx(buttonStyles({ variant, disabled }), className);
}
