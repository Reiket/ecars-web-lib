import {SelectComponent} from '@/components/Select/SelectComponent';
import {SelectList} from '@/components/Select/components/SelectList';
import {SelectOption} from '@/components/Select/components/SelectOption';
import {SelectInput} from '@/components/Select/components/SelectInput';
import {SelectArrow} from '@/components/Select/components/SelectArrow';
import {SelectWrapper} from '@/components/Select/components/SelectWrapper';
import {SelectBlockHOC} from '@/components/Select/constants';

export const Select = Object.assign(SelectComponent, {
  List: SelectList,
  Option: SelectOption,
  Input: SelectInput,
  Arrow: SelectArrow,
  Wrapper: SelectWrapper,
  Block: SelectBlockHOC,
});
