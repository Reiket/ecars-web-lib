import type {FC} from 'react';

import type {AccordionTitleProps} from '@/components/Accordion/components/AccordionTitle';
import {Accordion} from '@/components/Accordion';

export interface Props extends AccordionTitleProps {
  onClick: () => void;
}
export const AccordionBlock: FC<Props> = ({onClick, title}) => (
  <Accordion.Button onClick={onClick}>
    <Accordion.Title title={title} />
    <Accordion.Arrow />
  </Accordion.Button>
);
