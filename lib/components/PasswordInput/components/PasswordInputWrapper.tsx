import type {FC, ReactNode} from 'react';
import {cn} from '@/services/helpers';
import type {ElementProps} from '@/services/types';

interface Props extends ElementProps {
  children: ReactNode;
}

export const PasswordInputWrapper: FC<Props> = ({block, children}) => (
  <div className={cn(block, 'password')}>{children}</div>
);
