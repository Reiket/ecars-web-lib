import { FC } from 'react';
import { InputProps } from '../../Input/Input';
export interface Props extends InputProps {
    hasSearch: boolean;
}
export declare const SelectInput: FC<Props>;
