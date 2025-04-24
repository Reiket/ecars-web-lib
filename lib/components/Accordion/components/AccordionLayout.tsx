import type {FC, ReactNode} from 'react';
import {cn} from '@/services/helpers';
import type {ElementProps} from '@/services/types';
import {ACCORDION_TEST_ID} from '@/components/Accordion/constants';

export interface Props extends ElementProps {
  children: ReactNode;
  isOpen: boolean;
}

export const AccordionLayout: FC<Props> = ({block, isOpen, children}) => (
  <div
    data-testid={ACCORDION_TEST_ID}
    className={cn(block, 'accordion', {
      '_active': isOpen,
    })}
  >
    {children}
  </div>
);
