import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {accordionContentMock} from '../src/services/mocks';
import type {AccordionItem} from '../lib';
import {FilterAccordion} from '../lib';

import {FilterAccordionExample} from '../src/components/FilterAccordionExample';

type StoryProps = ComponentProps<typeof FilterAccordion> & {
  items: AccordionItem[];
};

const meta: Meta<StoryProps> = {
  component: FilterAccordion,
  tags: ['autodocs'],
  args: {
    items: accordionContentMock,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({items}) => <FilterAccordionExample items={items} />,
};
