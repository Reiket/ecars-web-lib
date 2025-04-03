import type {FC, ReactNode} from 'react';
import {Link} from 'react-router';
import {ROUTER_LINK_TEST_ID, RouterLinkColorType} from '@/components/RouterLink/constants';
import {cn} from '@/services/helpers';
import {ElementProps} from '@/services/types';

export interface RouterLinkProps extends ElementProps {
  color: RouterLinkColorType;
  children: ReactNode;
  to?: string;
  href?: string;
  withIcon?: boolean;
}

export const RouterLink: FC<RouterLinkProps> = ({color, block, href, to, children, withIcon = false}) => {
  const classNames = cn(block, `link`, `link--${color}`, {
    'link--icon': withIcon,
  });
  if (to) {
    return (
      <Link
        data-testid={ROUTER_LINK_TEST_ID}
        to={to}
        className={classNames}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        data-testid={ROUTER_LINK_TEST_ID}
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return null;
};
