import { FC } from 'react';
import { InputProps } from '../Input/Input';
export interface Props extends InputProps {
    isOpen: boolean;
    options: string[];
    onClick: () => void;
    onChange: (value: string) => void;
    value: string;
    handleSelect: (isOpen: boolean) => void;
    onClickToOptions: (value: string) => void;
    hasSearch?: boolean;
}
export declare const SelectComponent: FC<Props>;
