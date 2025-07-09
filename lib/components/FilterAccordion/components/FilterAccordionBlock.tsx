import type {FC, ReactNode} from 'react';

export interface Props {
  children: ReactNode;
}

export const FilterAccordionBlock: FC<Props> = ({children}) => (
  <div className="filter-accordion__block">{children}</div>
);
