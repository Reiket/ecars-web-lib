import { FC, ReactNode } from 'react';
import { ElementProps } from '../../../services/types';
export interface Props extends ElementProps {
    children: ReactNode;
    isOpen: boolean;
}
export declare const AccordionLayout: FC<Props>;
