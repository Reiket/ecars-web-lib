import type {FC, ReactNode} from 'react';
import {cn} from '@/services/helpers';
import type {ElementProps} from '@/services/types';
import {PASSWORD_INPUT_TEST_ID} from '@/components/PasswordInput/constants';

export interface Props extends ElementProps {
  children: ReactNode;
  disabled?: boolean;
  hasError?: boolean;
  className?: string;
}

export const PasswordInputWrapper: FC<Props> = ({className, children, hasError = false, disabled = false}) => (
  <div
    data-testid={PASSWORD_INPUT_TEST_ID}
    className={cn(className, 'password', {
      'disabled': disabled,
      'error': hasError,
    })}
  >
    {children}
  </div>
);
