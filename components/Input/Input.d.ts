import { FC, HTMLInputTypeAttribute } from 'react';
import { ElementProps } from '../../services/types';
export interface InputProps extends ElementProps {
    type?: HTMLInputTypeAttribute;
    value?: string;
    onChange?: (value: string) => void;
    name?: string;
    placeholder?: string;
    id?: string;
    disabled?: boolean;
    hasError?: boolean;
    isReadOnly?: boolean;
    isTransparent?: boolean;
}
export declare const Input: FC<InputProps>;
