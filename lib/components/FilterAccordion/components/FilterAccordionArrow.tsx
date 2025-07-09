import type {FC} from 'react';
import {Icons} from '@/services/icons';

export interface Props {
  onClick: () => void;
}

export const FilterAccordionArrow: FC<Props> = ({onClick}) => (
  <button
    onClick={onClick}
    className="filter-accordion__arrow"
  >
    <Icons.ArrowNarrowDown />
  </button>
);
