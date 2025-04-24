import { FC } from 'react';
export interface Props {
    isSelected: boolean;
    onOptionClick: () => void;
    option: string;
}
export declare const SelectOption: FC<Props>;
