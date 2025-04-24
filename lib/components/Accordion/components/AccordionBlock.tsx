import type {FC} from 'react';
import {Accordion} from '../constants';
import type {AccordionTitleProps} from '@/components/Accordion/components/AccordionTitle';

export interface Props extends AccordionTitleProps {
  onClick: () => void;
}

export const AccordionBlock: FC<Props> = ({onClick, title}) => (
  <Accordion.Button onClick={onClick}>
    <Accordion.Title title={title} />
    <Accordion.Arrow />
  </Accordion.Button>
);
