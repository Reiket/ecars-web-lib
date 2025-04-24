import type {FC} from 'react';
import {Accordion} from '@/components/Accordion/constants';
import {useAccordion} from '../services/hooks/useAccordion';
import type {AccordionItem} from '@/services/types';

interface Props {
  items: AccordionItem[];
}

export const AccordionExample: FC<Props> = ({items}) => {
  const {handleToggle, activeIndex} = useAccordion();
  return (
    <>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const onClick = () => {
          handleToggle(index);
        };
        return (
          <Accordion
            key={index}
            title={item.title}
            textContent={item.text}
            isOpen={isOpen}
            onClick={onClick}
          />
        );
      })}
    </>
  );
};
