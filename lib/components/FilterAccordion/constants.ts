import {FilterAccordionBlock} from '@/components/FilterAccordion/components/FilterAccordionBlock';
import {withBlockClass} from '@/services/hoc/withBlockClass';

export const FILTER_ACCORDION_BLOCK_CLASS = 'filter-accordion';
export const FILTER_ACCORDION_TEST_ID = 'filterAccordionTestId';
export const FilterAccordionHOC = withBlockClass(FilterAccordionBlock, FILTER_ACCORDION_BLOCK_CLASS);
