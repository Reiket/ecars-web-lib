import type {FC, MouseEvent, ReactNode} from 'react';
import type {ButtonAttributesType, ButtonColorType, ButtonSizeType} from '@/components/Button/constants';
import {BUTTON_TEST_ID} from '@/components/Button/constants';
import {cn} from '@/services/helpers';
import type {ElementProps} from '@/services/types';

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

export const Button: FC<ButtonProps> = ({
  children,
  size,
  color,
  onClick,
  type = 'button',
  disabled = false,
  isTransparent = false,
  withIcon = false,
  block,
}) => {
  const classNames = cn(block, 'button', `button--${size} button--${color}`, {
    'button--transparent': isTransparent,
    'button--icon': withIcon,
  });
  return (
    <button
      data-testid={BUTTON_TEST_ID}
      disabled={disabled}
      type={type}
      className={classNames}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
