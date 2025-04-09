import { FC, ReactNode } from 'react';
import { ElementProps } from '../../services/types';
interface Props extends ElementProps {
    to: string;
    children: ReactNode;
}
export declare const NavLink: FC<Props>;
export {};
