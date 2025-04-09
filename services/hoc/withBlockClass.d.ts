import { ComponentType, FC, ReactElement } from 'react';
import IntrinsicElements = JSX.IntrinsicElements;
interface WithBlockProps {
    block: string;
    children: ReactElement;
}
export declare const withBlockClass: <P extends object>(Tag: ComponentType<P> | keyof IntrinsicElements, className: string) => FC<P & WithBlockProps>;
export {};
