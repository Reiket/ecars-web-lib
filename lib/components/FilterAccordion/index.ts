import {FilterAccordionComponent} from '@/components/FilterAccordion/FilterAccordionComponent';
import {FilterAccordionLayout} from '@/components/FilterAccordion/components/FilterAccordionLayout';
import {FilterAccordionArrow} from './components/FilterAccordionArrow';
import {FilterAccordionReset} from '@/components/FilterAccordion/components/FilterAccordionReset';
import {FilterAccordionHOC} from '@/components/FilterAccordion/constants';
import {FilterAccordionContent} from './components/FilterAccordionContent';

export const FilterAccordion = Object.assign(FilterAccordionComponent, {
  Layout: FilterAccordionLayout,
  Arrow: FilterAccordionArrow,
  Reset: FilterAccordionReset,
  Block: FilterAccordionHOC,
  Content: FilterAccordionContent,
});
