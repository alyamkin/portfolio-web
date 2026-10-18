import { cva, type VariantProps } from 'class-variance-authority';

export const buttonStyles = cva(
  'inline-flex items-center justify-center gap-2 rounded-[10px] border font-semibold leading-none transition-[transform,background-color,border-color] duration-150 hover:-translate-y-px',
  {
    variants: {
      variant: {
        primary:
          'border-transparent bg-accent text-accent-ink hover:bg-[color-mix(in_srgb,var(--accent)_88%,var(--ink))]',
        secondary: 'border-line bg-transparent text-ink hover:border-ink',
      },
      size: {
        md: 'px-5 py-3.5 text-[0.95rem]',
        sm: 'px-3.5 py-2.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;
