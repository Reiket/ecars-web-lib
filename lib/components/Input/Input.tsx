import {cn} from '@/services/helpers';
import {ChangeEvent, FC, HTMLInputTypeAttribute} from 'react';
import {INPUT_TEST_ID} from '@/components/Input/constants';

interface Props {
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  placeholder?: string;
  id?: string;
  disabled?: boolean;
  hasError?: boolean;
}

export const Input: FC<Props> = ({
  value,
  onChange,
  hasError,
  placeholder,
  disabled = false,
  type = 'text',
  id = 'input',
  name = 'input',
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.currentTarget.value);
    }
  };
  return (
    <input
      onChange={handleChange}
      disabled={disabled}
      autoComplete="off"
      data-testid={INPUT_TEST_ID}
      className={cn('input', {
        'error': hasError,
      })}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      type={type}
    />
  );
};
