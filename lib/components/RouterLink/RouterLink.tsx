import type {FC, ReactNode} from 'react';
import {Link} from 'react-router';
import {ROUTER_LINK_TEST_ID, RouterLinkColorType, RouterLinkSizeType} from '@/components/RouterLink/constants';
import {cn} from '@/services/helpers';

interface Props {
  to?: string;
  href?: string;
  color: RouterLinkColorType;
  size?: RouterLinkSizeType;
  children: ReactNode;
  withIcon?: boolean;
}

export const RouterLink: FC<Props> = ({color, href, to, children, withIcon = false, size = null}) => {
  const classNames = cn(`link link-${color} link-${size}`, {
    'link-icon': withIcon,
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
};
