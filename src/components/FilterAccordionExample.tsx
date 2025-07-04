import type {FC} from 'react';
import type {AccordionItem} from '@/services/types';

import {useFilterAccordion} from '@src/services/hooks/useFilterAccordion';
import {FilterAccordion} from '@/components/FilterAccordion/constants';

interface Props {
  items: AccordionItem[];
}

export const FilterAccordionExample: FC<Props> = ({items}) => {
  const {handleToggle, activeIndexes} = useFilterAccordion();
  return (
    <>
      {items.map((item, index) => {
        const isOpen = activeIndexes.includes(index);
        const onClick = () => {
          handleToggle(index);
        };
        return (
          <FilterAccordion
            key={index}
            title={item.title}
            isOpen={isOpen}
            onClick={onClick}
          >
            {item.text}
          </FilterAccordion>
        );
      })}
    </>
  );
};
