import { FC, HTMLInputTypeAttribute } from 'react';
import { ElementProps } from '../../services/types';
interface Props extends ElementProps {
    type?: HTMLInputTypeAttribute;
    value?: string;
    onChange?: (value: string) => void;
    name?: string;
    placeholder?: string;
    id?: string;
    disabled?: boolean;
    hasError?: boolean;
}
export declare const Input: FC<Props>;
export {};
