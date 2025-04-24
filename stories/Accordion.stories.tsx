import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from '../lib/components/Accordion/constants';
import {accordionContentMock} from '../src/services/mocks';
import {AccordionExample} from '../src/components/AccordionExample';
import type {AccordionItem} from '../lib/services/types';

type StoryProps = ComponentProps<typeof Accordion> & {
  items: AccordionItem[];
};

const meta: Meta<StoryProps> = {
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    onClick: {action: 'onClick'},
  },
  args: {
    items: accordionContentMock,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({items}) => <AccordionExample items={items} />,
};
