import type {FC, ReactNode} from 'react';
import {useAccordionHeight} from '@/services/hooks/useAccordionHeight';

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

export const FilterAccordionContent: FC<Props> = ({isOpen, children}) => {
  const {style, contentRef} = useAccordionHeight(isOpen);
  return (
    <div
      style={style}
      ref={contentRef}
      className="filter-accordion__content"
    >
      <div className="filter-accordion__body">{children}</div>
    </div>
  );
};
