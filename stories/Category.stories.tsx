import {ComponentProps} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {Category} from '../lib/components/Category/Category';
import {CATEGORIES_LIST} from '../lib/components/Category/constants';

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
