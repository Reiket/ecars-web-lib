import type {FC} from 'react';
import {Accordion} from '@/components/Accordion/constants';
import type {ElementProps} from '@/services/types';

export interface Props extends ElementProps {
  isOpen: boolean;
  textContent: string;
  title: string;
  onClick: () => void;
}

export const AccordionComponent: FC<Props> = ({block, isOpen, textContent, title, onClick}) => (
  <Accordion.Layout
    isOpen={isOpen}
    block={block}
  >
    <Accordion.Block
      title={title}
      onClick={onClick}
    />
    <Accordion.Content isOpen={isOpen}>{textContent}</Accordion.Content>
  </Accordion.Layout>
);
