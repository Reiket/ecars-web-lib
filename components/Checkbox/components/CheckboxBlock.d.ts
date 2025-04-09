import { FC, ReactNode } from 'react';
import { ElementProps } from '../../../services/types';
interface Props extends ElementProps {
    htmlFor?: string;
    children: ReactNode;
}
export declare const CheckboxBlock: FC<Props>;
export {};
