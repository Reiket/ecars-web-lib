import { FC, ReactNode } from 'react';
import { ElementProps } from '../../../services/types';
interface Props extends ElementProps {
    children: ReactNode;
    onClickOutside: (isOpen: boolean) => void;
    isOpen: boolean;
    disabled?: boolean;
}
export declare const SelectWrapper: FC<Props>;
export {};
