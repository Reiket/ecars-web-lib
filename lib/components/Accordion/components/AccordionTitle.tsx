import type {FC} from 'react';

export interface AccordionTitleProps {
  title: string;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({title}) => <h3 className="accordion__title">{title}</h3>;
