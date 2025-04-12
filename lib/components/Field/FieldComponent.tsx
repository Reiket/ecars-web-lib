import type {ReactElement, FC} from 'react';
import {cloneElement} from 'react';
import {Field, FIELD_TEST_ID} from '@/components/Field/constants';
import type {ElementProps} from '@/services/types';
import {cn} from '@/services/helpers';

export interface Props extends ElementProps {
  children: ReactElement;
  id?: string;
  label?: string;
  error?: string;
}

export const FieldComponent: FC<Props> = ({label, block, children, error, id = 'input'}) => {
  const classNames = cn(block, 'field');
  return (
    <div
      data-testid={FIELD_TEST_ID}
      className={classNames}
    >
      {!!label && (
        <Field.Label
          text={label}
          htmlFor={id}
        />
      )}
      {cloneElement(children, {id, hasError: !!error})}
      {!!error && <Field.Error errorText={error} />}
    </div>
  );
};
