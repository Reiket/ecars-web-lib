import { ComponentType, FC, ReactElement, default as React } from 'react';
import IntrinsicElements = React.JSX.IntrinsicElements;
interface WithBlockProps {
    block: string;
    children: ReactElement | ReactElement[];
}
export declare const withBlockClass: <P extends object>(Tag: ComponentType<P> | keyof IntrinsicElements, className: string) => FC<P & WithBlockProps>;
export {};
