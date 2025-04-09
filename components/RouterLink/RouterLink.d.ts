import { FC, ReactNode } from 'react';
import { RouterLinkColorType } from './constants';
import { ElementProps } from '../../services/types';
export interface RouterLinkProps extends ElementProps {
    color: RouterLinkColorType;
    children: ReactNode;
    to?: string;
    href?: string;
    withIcon?: boolean;
}
export declare const RouterLink: FC<RouterLinkProps>;
