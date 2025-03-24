import type {FC, ReactNode} from 'react';
import {CHECKBOX_TEST_ID} from '@/components/Checkbox/constants';

interface Props {
  htmlFor?: string;
  children: ReactNode;
}

export const CheckboxBlock: FC<Props> = ({children, htmlFor = 'checkbox'}) => {
  return (
    <label
      data-testid={CHECKBOX_TEST_ID}
      className="checkbox"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
