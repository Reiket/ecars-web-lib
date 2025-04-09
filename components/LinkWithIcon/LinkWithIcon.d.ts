import { ComponentType, FC, ReactNode } from 'react';
import { RouterLinkProps } from '../RouterLink/RouterLink';
interface Props extends RouterLinkProps {
    children: ReactNode;
    RightIcon?: ComponentType;
    LeftIcon?: ComponentType;
}
export declare const LinkWithIcon: FC<Props>;
export {};
