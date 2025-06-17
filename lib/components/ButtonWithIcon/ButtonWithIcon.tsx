import type {ComponentType, FC, ReactNode} from 'react';
import type {ButtonProps} from '@/components/Button/Button';
import {Button} from '@/components/Button/Button';
import {LEFT_ICON_BUTTON_TEST_ID, RIGHT_ICON_BUTTON_TEST_ID} from '@/components/ButtonWithIcon/constants';

interface IconProps {
  className?: string;
}

export interface ButtonIconProps<T> extends ButtonProps {
  children: ReactNode;
  RightIcon?: ComponentType<T>;
  LeftIcon?: ComponentType<T>;
  className?: string;
}

export const ButtonWithIcon: FC<ButtonIconProps<IconProps>> = ({
  RightIcon,
  LeftIcon,
  children,
  className,
  ...props
}) => (
  <Button
    withIcon
    {...props}
  >
    {!!LeftIcon && (
      <LeftIcon
        className={className}
        data-testid={LEFT_ICON_BUTTON_TEST_ID}
      />
    )}
    {children}
    {!!RightIcon && (
      <RightIcon
        className={className}
        data-testid={RIGHT_ICON_BUTTON_TEST_ID}
      />
    )}
  </Button>
);
