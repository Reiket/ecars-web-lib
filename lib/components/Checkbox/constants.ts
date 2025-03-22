import {CheckboxComponent} from '@/components/Checkbox/CheckboxComponent';
import {CheckboxIndicator} from '@/components/Checkbox/components/CheckboxIndicator';
import {CheckboxBlock} from '@/components/Checkbox/components/CheckboxBlock';
import {CheckboxInput} from '@/components/Checkbox/components/CheckboxInput';

export const Checkbox = Object.assign(CheckboxComponent, {
  Block: CheckboxBlock,
  Indicator: CheckboxIndicator,
  Input: CheckboxInput,
});

export interface CheckboxProps {
  name?: string;
  id?: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  hasError?: boolean;
}

export const CHECKBOX_TEST_ID = 'checkboxTestId';
export const CHECKBOX_TEST_INPUT_ID = 'checkboxTestInputId';
