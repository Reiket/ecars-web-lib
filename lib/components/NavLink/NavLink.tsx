import {NavLink as Link} from 'react-router';
import type {FC, ReactNode} from 'react';
import {cn} from '@/services/helpers';
import type {ElementProps} from '@/services/types';

interface Props extends ElementProps {
  to: string;
  children: ReactNode;
}

export const NavLink: FC<Props> = ({block, to, children}) => {
  const classNames = (isActive: boolean) =>
    cn(block, 'nav-link', {
      '_active': isActive,
    });
  return (
    <Link
      className={({isActive}) => classNames(isActive)}
      to={to}
    >
      {children}
    </Link>
  );
};
