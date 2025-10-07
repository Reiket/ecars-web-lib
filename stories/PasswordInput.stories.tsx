import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {PasswordInput} from '../lib/components/PasswordInput';

type StoryProps = ComponentProps<typeof PasswordInput>;

const meta: Meta<StoryProps> = {
  component: PasswordInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => <PasswordInput />,
};
