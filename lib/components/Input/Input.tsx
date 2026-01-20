import {cn} from '@/services/helpers';
import type {ChangeEvent, FC, HTMLInputTypeAttribute} from 'react';
import {INPUT_TEST_ID} from '@/components/Input/constants';
import type {ElementProps} from '@/services/types';
import type {UseFormRegisterReturn} from 'react-hook-form';

export interface InputProps extends ElementProps {
  register?: UseFormRegisterReturn;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  placeholder?: string;
  id?: string;
  disabled?: boolean;
  hasError?: boolean;
  isReadOnly?: boolean;
  isTransparent?: boolean;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  hasError,
  placeholder,
  block,
  register,
  disabled = false,
  type = 'text',
  id = 'input',
  name = 'input',
  isReadOnly = false,
  isTransparent = false,
}) => {
  const classNames = cn(block, 'input', {
    'error': hasError,
    'transparent': isTransparent,
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.currentTarget.value);
    }
  };
  return (
    <input
      {...register}
      readOnly={isReadOnly}
      onChange={handleChange}
      disabled={disabled}
      autoComplete="off"
      data-testid={INPUT_TEST_ID}
      className={classNames}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      type={type}
    />
  );
};
