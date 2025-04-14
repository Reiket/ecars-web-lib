import { FC, ReactNode } from 'react';
import { ElementProps } from '../../../services/types';
export interface Props extends ElementProps {
    htmlFor?: string;
    children: ReactNode;
}
export declare const CheckboxBlock: FC<Props>;
