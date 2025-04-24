import { FC } from 'react';
import { AccordionTitleProps } from './AccordionTitle';
export interface Props extends AccordionTitleProps {
    onClick: () => void;
}
export declare const AccordionBlock: FC<Props>;
