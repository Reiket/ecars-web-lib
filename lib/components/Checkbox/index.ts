import {CheckboxComponent} from '@/components/Checkbox/CheckboxComponent';
import {CheckboxBlock} from '@/components/Checkbox/components/CheckboxBlock';
import {CheckboxIndicator} from '@/components/Checkbox/components/CheckboxIndicator';
import {CheckboxInput} from '@/components/Checkbox/components/CheckboxInput';

export const Checkbox = Object.assign(CheckboxComponent, {
  Block: CheckboxBlock,
  Indicator: CheckboxIndicator,
  Input: CheckboxInput,
});
