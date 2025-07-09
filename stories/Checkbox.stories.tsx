import {ComponentProps} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {Checkbox} from '../lib/components/Checkbox';

type StoryProps = ComponentProps<typeof Checkbox>;

const meta: Meta<StoryProps> = {
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({...args}) => {
    return <Checkbox {...args} />;
  },
};
