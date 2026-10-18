import clsx from 'clsx';
import type { ComponentProps } from 'react';

import SmartLink from './SmartLink';
import { buttonStyles, type ButtonStyleProps } from './button-styles';

type ButtonLinkProps = ComponentProps<typeof SmartLink> & ButtonStyleProps;

const ButtonLink = ({ variant, size, className, ...rest }: ButtonLinkProps) => (
  <SmartLink
    className={clsx(buttonStyles({ variant, size }), className)}
    {...rest}
  />
);

export default ButtonLink;
