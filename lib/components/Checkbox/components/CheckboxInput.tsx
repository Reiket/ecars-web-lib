import {type ChangeEvent, FC} from 'react';
import {CHECKBOX_TEST_INPUT_ID, CheckboxProps} from '@/components/Checkbox/constants';
import {cn} from '@/services/helpers';

export const CheckboxInput: FC<CheckboxProps> = ({
  onChange,
  id = 'checkbox',
  checked = false,
  disabled = false,
  name = 'checkbox',
  hasError = false,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.checked);
  };
  return (
    <input
      data-testid={CHECKBOX_TEST_INPUT_ID}
      name={name}
      disabled={disabled}
      className={cn('checkbox__input', {
        'error': hasError,
      })}
      checked={checked}
      onChange={handleChange}
      id={id}
      type="checkbox"
    />
  );
};
