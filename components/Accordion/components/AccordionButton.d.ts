import { FC, ReactNode } from 'react';
export interface Props {
    children: ReactNode;
    onClick: () => void;
}
export declare const AccordionButton: FC<Props>;
