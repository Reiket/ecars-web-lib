import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {CATEGORIES_LIST, Category} from '../lib';

type StoryProps = ComponentProps<typeof Category>;

const meta: Meta<StoryProps> = {
  component: Category,
  tags: ['autodocs'],
  argTypes: {
    category: {
      options: Object.values(CATEGORIES_LIST),
      control: {
        type: 'select',
      },
    },
  },
  args: {
    category: CATEGORIES_LIST.GUIDES,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({...args}) => {
    return <Category {...args} />;
  },
};
