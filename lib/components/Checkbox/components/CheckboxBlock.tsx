import type {FC, ReactNode} from 'react';
import {CHECKBOX_TEST_ID} from '@/components/Checkbox/constants';
import type {ElementProps} from '@/services/types';
import {cn} from '@/services/helpers';

export interface Props extends ElementProps {
  htmlFor?: string;
  children: ReactNode;
}

export const CheckboxBlock: FC<Props> = ({children, block, htmlFor = 'checkbox'}) => {
  const classNames = cn(block, 'checkbox');
  return (
    <label
      data-testid={CHECKBOX_TEST_ID}
      className={classNames}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
