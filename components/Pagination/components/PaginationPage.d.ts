import { FC } from 'react';
interface Props {
    isSelected: boolean;
    page: number;
    disabled?: boolean;
    onClick?: () => void;
}
export declare const PaginationPage: FC<Props>;
export {};
