import { FC } from 'react';
import { ElementProps } from '../../services/types';
import { DropdownProps } from './constants';
interface Props extends ElementProps, DropdownProps {
    handleOpen: () => void;
    onClickOutside: (isOpen: boolean) => void;
    isOpen: boolean;
}
export declare const DropdownComponent: FC<Props>;
export {};
