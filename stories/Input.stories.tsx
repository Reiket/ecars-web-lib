import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Input} from '../lib';

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({...args}) => {
    return <Input {...args} />;
  },
};
