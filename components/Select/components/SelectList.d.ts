import { FC } from 'react';
interface Props {
    options: string[] | null;
    onClick: (value: string) => void;
    value: string;
}
export declare const SelectList: FC<Props>;
export {};
