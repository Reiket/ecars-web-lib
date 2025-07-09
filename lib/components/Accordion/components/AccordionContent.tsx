import type {FC} from 'react';
import {useAccordionHeight} from '@/services/hooks/useAccordionHeight';

export interface Props {
  isOpen: boolean;
  children: string;
}

export const AccordionContent: FC<Props> = ({isOpen, children}) => {
  const {style, contentRef} = useAccordionHeight(isOpen);
  return (
    <div
      style={style}
      className="accordion__content"
    >
      <p
        className="accordion__text"
        ref={contentRef}
      >
        {children}
      </p>
    </div>
  );
};
