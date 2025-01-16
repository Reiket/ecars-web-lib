import type {FC, MouseEvent, ReactNode} from 'react';
import {cn} from '@ecars/services/helpers/classnames';

export interface ButtonProps {
  type?: 'submit' | 'button' | 'reset';
  color: 'blue' | 'red';
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({children, color, onClick, type = 'submit', disabled = false}) => {
  return (
    <button
      className={cn('button', color)}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
