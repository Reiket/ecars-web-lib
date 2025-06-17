import { FC, ReactNode } from 'react';
interface Props {
    isSelected: boolean;
    value: string;
    label?: ReactNode;
    onSelect: (value: string) => void;
}
export declare const DropdownOption: FC<Props>;
export {};
