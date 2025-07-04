import {FilterAccordionLayout} from '@/components/FilterAccordion/components/FilterAccordionLayout';
import {FilterAccordionArrow} from '@/components/FilterAccordion/components/FilterAccordionArrow';
import {FilterAccordionReset} from '@/components/FilterAccordion/components/FilterAccordionReset';
import {FilterAccordionBlock} from '@/components/FilterAccordion/components/FilterAccordionBlock';
import {FilterAccordionContent} from '@/components/FilterAccordion/components/FilterAccordionContent';
import {withBlockClass} from '@/services/hoc/withBlockClass';
import {FilterAccordionComponent} from '@/components/FilterAccordion/FilterAccordionComponent';

export const FILTER_ACCORDION_BLOCK_CLASS = 'filter-accordion';
export const FILTER_ACCORDION_TEST_ID = 'filterAccordionTestId';
export const FilterAccordionHOC = withBlockClass(FilterAccordionBlock, FILTER_ACCORDION_BLOCK_CLASS);

export const FilterAccordion = Object.assign(FilterAccordionComponent, {
  Layout: FilterAccordionLayout,
  Arrow: FilterAccordionArrow,
  Reset: FilterAccordionReset,
  Block: FilterAccordionHOC,
  Content: FilterAccordionContent,
});
