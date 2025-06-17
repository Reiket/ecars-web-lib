import { FC } from 'react';
import { PaginationArrowDirection } from '../constants';
interface Props {
    direction: PaginationArrowDirection;
    disabled?: boolean;
    onClick: () => void;
}
export declare const PaginationArrow: FC<Props>;
export {};
