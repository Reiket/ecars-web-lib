import type {FC} from 'react';
import {FIELD_LABEL_TEST_ID} from '@/components/Field/constants';

interface Props {
  htmlFor?: string;
  text: string;
}

export const FieldLabel: FC<Props> = ({text, htmlFor = 'input'}) => {
  return (
    <label
      data-testid={FIELD_LABEL_TEST_ID}
      className="field__label"
      htmlFor={htmlFor}
    >
      {text}
    </label>
  );
};
