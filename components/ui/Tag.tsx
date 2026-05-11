import { cva } from 'class-variance-authority';
import clsx from 'clsx';

export type TagVariant = 'general' | 'accent' | 'completed' | 'inProgress';

type TagProps = {
  children: React.ReactNode;
  variant?: TagVariant;
  size?: 'md' | 'lg';
  className?: string;
};

const tagStyles = cva(
  'inline-flex items-center justify-center transition-colors w-auto font-medium',
  {
    variants: {
      variant: {
        general:
          'bg-surface-base text-text-secondary hover:bg-surface-hover rounded-md',
        accent:
          'bg-accent-soft text-text-accent hover:bg-accent-soft-hover rounded-md',
        completed: 'bg-status-success-soft text-text-success rounded-full',
        inProgress: 'bg-accent-soft text-text-accent rounded-full',
      },
      size: {
        md: 'px-2 py-1 text-caption',
        lg: 'px-2.5 py-1.5 text-caption-lg',
      },
    },
    defaultVariants: {
      variant: 'general',
      size: 'md',
    },
  },
);

const Tag = ({
  variant = 'general',
  size = 'md',
  className,
  children,
}: TagProps) => {
  const cls = clsx(tagStyles({ variant, size }), className);

  return <div className={cls}>{children}</div>;
};

export default Tag;
