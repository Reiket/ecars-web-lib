import type {ComponentType, FC, ReactNode} from 'react';
import {RouterLink, RouterLinkProps} from '@/components/RouterLink/RouterLink';
import {LEFT_ICON_LINK_TEST_ID, RIGHT_ICON_LINK_TEST_ID} from '@/components/LinkWithIcon/constants';

interface Props extends RouterLinkProps {
  children: ReactNode;
  RightIcon?: ComponentType;
  LeftIcon?: ComponentType;
}

export const LinkWithIcon: FC<Props> = ({RightIcon, LeftIcon, children, ...props}) => {
  return (
    <RouterLink
      withIcon
      {...props}
    >
      {!!LeftIcon && <LeftIcon data-testid={LEFT_ICON_LINK_TEST_ID} />}
      {children}
      {!!RightIcon && <RightIcon data-testid={RIGHT_ICON_LINK_TEST_ID} />}
    </RouterLink>
  );
};
