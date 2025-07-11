import type {FC, ReactNode} from 'react';
import type {ElementProps} from '@/services/types';
import {FILTER_ACCORDION_BLOCK_CLASS} from '@/components/FilterAccordion/constants';
import {FilterAccordion} from '@/components/FilterAccordion';

export interface Props extends ElementProps {
  isOpen: boolean;
  title: string;
  onClick: () => void;
  children: ReactNode;
}

export const FilterAccordionComponent: FC<Props> = ({onClick, title, isOpen, children}) => (
  <FilterAccordion.Layout isOpen={isOpen}>
    <FilterAccordion.Block block={FILTER_ACCORDION_BLOCK_CLASS}>
      <h2 className="filter-accordion__title">{title}</h2>
      <FilterAccordion.Reset />
      <FilterAccordion.Arrow onClick={onClick} />
    </FilterAccordion.Block>
    <FilterAccordion.Content isOpen={isOpen}>{children}</FilterAccordion.Content>
  </FilterAccordion.Layout>
);
