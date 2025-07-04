import type {FC, ReactNode} from 'react';
import {cn} from '@/services/helpers';
import type {ElementProps} from '@/services/types';
import {FILTER_ACCORDION_TEST_ID} from '@/components/FilterAccordion/constants';

interface Props extends ElementProps {
  isOpen: boolean;
  children: ReactNode;
}

export const FilterAccordionLayout: FC<Props> = ({isOpen, block, children}) => (
  <div
    data-testid={FILTER_ACCORDION_TEST_ID}
    className={cn(block, 'filter-accordion', {
      '_active-accordion': isOpen,
    })}
  >
    {children}
  </div>
);
