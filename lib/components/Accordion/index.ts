import {AccordionComponent} from '@/components/Accordion/AccordionComponent';
import {AccordionContent} from '@/components/Accordion/components/AccordionContent';
import {AccordionArrow} from '@/components/Accordion/components/AccordionArrow';
import {AccordionTitle} from '@/components/Accordion/components/AccordionTitle';
import {AccordionBlock} from '@/components/Accordion/components/AccordionBlock';
import {AccordionLayout} from '@/components/Accordion/components/AccordionLayout';
import {AccordionButton} from '@/components/Accordion/components/AccordionButton';

export const Accordion = Object.assign(AccordionComponent, {
  Content: AccordionContent,
  Arrow: AccordionArrow,
  Title: AccordionTitle,
  Block: AccordionBlock,
  Layout: AccordionLayout,
  Button: AccordionButton,
});
