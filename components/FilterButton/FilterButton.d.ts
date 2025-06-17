import { FC } from 'react';
import { ElementProps } from '../../services/types';
interface Props extends ElementProps {
    children: string;
    onClick?: () => void;
}
export declare const FilterButton: FC<Props>;
export {};
