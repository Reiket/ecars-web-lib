import type {ComponentType, FC, ReactNode} from 'react';
import type {ButtonProps} from '@/components/Button/Button';
import {Button} from '@/components/Button/Button';
import {LEFT_ICON_BUTTON_TEST_ID, RIGHT_ICON_BUTTON_TEST_ID} from '@/components/ButtonWithIcon/constants';

interface Props extends ButtonProps {
  children: ReactNode;
  RightIcon?: ComponentType;
  LeftIcon?: ComponentType;
}

export const ButtonWithIcon: FC<Props> = ({RightIcon, LeftIcon, children, ...props}) => {
  return (
    <Button
      withIcon
      {...props}
    >
      {!!LeftIcon && <LeftIcon data-testid={LEFT_ICON_BUTTON_TEST_ID} />}
      {children}
      {!!RightIcon && <RightIcon data-testid={RIGHT_ICON_BUTTON_TEST_ID} />}
    </Button>
  );
};
