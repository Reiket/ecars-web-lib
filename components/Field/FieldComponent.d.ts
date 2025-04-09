import { FC, ReactElement } from 'react';
import { ElementProps } from '../../services/types';
interface Props extends ElementProps {
    children: ReactElement;
    id?: string;
    label?: string;
    error?: string;
}
export declare const FieldComponent: FC<Props>;
export {};
