import type {FC, ReactNode} from 'react';
import type {ButtonProps} from '@/components/Button/Button';
import {Button} from '@/components/Button/Button';
import {LEFT_ICON_BUTTON_TEST_ID, RIGHT_ICON_BUTTON_TEST_ID} from '@/components/ButtonWithIcon/constants';
import type {IconsType} from '@/services/icons';

export interface ButtonIconProps extends ButtonProps {
  children: ReactNode;
  RightIcon?: IconsType;
  LeftIcon?: IconsType;
  className?: string;
}

export const ButtonWithIcon: FC<ButtonIconProps> = ({RightIcon, LeftIcon, children, className, ...props}) => (
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
