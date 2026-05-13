import clsx from 'clsx';
import { tagStyles, TagVariant } from './variants';

type TagProps = {
  children: React.ReactNode;
  variant?: TagVariant;
  size?: 'md' | 'lg';
  className?: string;
};

const Tag = ({
  variant = 'general',
  size = 'md',
  className,
  children,
}: TagProps) => {
  return (
    <div className={clsx(tagStyles({ variant, size }), className)}>
      {children}
    </div>
  );
};

export default Tag;
