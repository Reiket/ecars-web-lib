import type {FC, MouseEvent, ReactNode} from 'react';
import {BUTTON_TEST_ID, ButtonAttributesType, ButtonColorType, ButtonSizeType} from '@/components/Button/constants';
import {cn} from '@/services/helpers';

export interface ButtonProps {
  type?: ButtonAttributesType;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  color: ButtonColorType;
  size: ButtonSizeType;
}

export const Button: FC<ButtonProps> = ({children, size, color, onClick, type = "button", disabled = false}) => {
  const classNames = cn("button", `button-${size}`, `button-${color}`)
  return (
    <button
      data-testid={BUTTON_TEST_ID}
      className= {classNames}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};