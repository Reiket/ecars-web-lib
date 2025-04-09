import { FC, MouseEvent, ReactNode } from 'react';
import { ButtonAttributesType, ButtonColorType, ButtonSizeType } from './constants';
import { ElementProps } from '../../services/types';
export interface ButtonProps extends ElementProps {
    size: ButtonSizeType;
    children: ReactNode;
    color: ButtonColorType;
    type?: ButtonAttributesType;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    isTransparent?: boolean;
    withIcon?: boolean;
}
export declare const Button: FC<ButtonProps>;
