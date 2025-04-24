import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {FilterButton} from '../lib/components/FilterButton/FilterButton';

type StoryProps = ComponentProps<typeof FilterButton> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: FilterButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {action: 'onClick'},
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: 'Blue',
  },
  render: ({buttonText, ...args}) => <FilterButton {...args}>{buttonText}</FilterButton>,
};
