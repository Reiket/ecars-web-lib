import { ComponentType, FC, ReactNode } from 'react';
import { ButtonProps } from '../Button/Button';
interface Props extends ButtonProps {
    children: ReactNode;
    RightIcon?: ComponentType;
    LeftIcon?: ComponentType;
}
export declare const ButtonWithIcon: FC<Props>;
export {};
