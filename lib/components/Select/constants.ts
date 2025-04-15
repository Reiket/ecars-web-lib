import {SelectComponent} from '@/components/Select/SelectComponent';
import {SelectList} from '@/components/Select/components/SelectList';
import {SelectOption} from '@/components/Select/components/SelectOption';
import {SelectInput} from '@/components/Select/components/SelectInput';
import {SelectArrow} from '@/components/Select/components/SelectArrow';
import {SelectWrapper} from '@/components/Select/components/SelectWrapper';
import {SelectBlock} from '@/components/Select/components/SelectBlock';
import {withBlockClass} from '@/services/hoc/withBlockClass';

export const SELECT_TEST_ID = 'selectTestId';

const SelectBlockHOC = withBlockClass(SelectBlock, 'select');

export const Select = Object.assign(SelectComponent, {
  List: SelectList,
  Option: SelectOption,
  Input: SelectInput,
  Arrow: SelectArrow,
  Wrapper: SelectWrapper,
  Block: SelectBlockHOC,
});
