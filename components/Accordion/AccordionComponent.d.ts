import { FC } from 'react';
import { ElementProps } from '../../services/types';
export interface Props extends ElementProps {
    isOpen: boolean;
    textContent: string;
    title: string;
    onClick: () => void;
}
export declare const AccordionComponent: FC<Props>;
