import {SelectBlock} from '@/components/Select/components/SelectBlock';
import {withBlockClass} from '@/services/hoc/withBlockClass';

export const SELECT_TEST_ID = 'selectTestId';

export const SelectBlockHOC = withBlockClass(SelectBlock, 'select');
