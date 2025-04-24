import type {FC} from 'react';
import {useRef} from 'react';

export interface Props {
  isOpen: boolean;
  children: string;
}

export const AccordionContent: FC<Props> = ({isOpen, children}) => {
  const contentHeight = useRef<HTMLParagraphElement | null>(null);
  const accordionStyle = isOpen ? {height: contentHeight.current?.scrollHeight} : {height: 0};
  return (
    <div
      style={accordionStyle}
      className="accordion__content"
    >
      <p
        className="accordion__text"
        ref={contentHeight}
      >
        {children}
      </p>
    </div>
  );
};
