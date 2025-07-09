import type {ElementProps} from '@/services/types';

export interface CheckboxProps extends ElementProps {
  name?: string;
  id?: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  hasError?: boolean;
}

export const CHECKBOX_TEST_ID = 'checkboxTestId';
export const CHECKBOX_TEST_INPUT_ID = 'checkboxTestInputId';
