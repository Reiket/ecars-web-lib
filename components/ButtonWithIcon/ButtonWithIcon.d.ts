import { ComponentType, FC, ReactNode } from 'react';
import { ButtonProps } from '../Button/Button';
interface IconProps {
    className?: string;
}
export interface ButtonIconProps<T> extends ButtonProps {
    children: ReactNode;
    RightIcon?: ComponentType<T>;
    LeftIcon?: ComponentType<T>;
    className?: string;
}
export declare const ButtonWithIcon: FC<ButtonIconProps<IconProps>>;
export {};
