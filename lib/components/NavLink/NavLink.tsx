import {NavLink as Link} from 'react-router';
import type {FC, ReactNode} from 'react';
import {cn} from '@/services/helpers';

interface Props {
  to: string;
  children: ReactNode;
}

export const NavLink: FC<Props> = ({to, children}) => {
  return (
    <Link
      className={({isActive}) =>
        cn('nav-link', {
          'link-active': isActive,
        })
      }
      to={to}
    >
      {children}
    </Link>
  );
};
