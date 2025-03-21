import {cloneElement, type FC, ReactElement} from 'react';
import {Field, FIELD_TEST_ID} from '@/components/Field/constants';

interface Props {
  children: ReactElement;
  id?: string;
  label?: string;
  error?: string;
}

export const FieldComponent: FC<Props> = ({label, children, error, id = 'input'}) => {
  return (
    <div
      data-testid={FIELD_TEST_ID}
      className="field"
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
