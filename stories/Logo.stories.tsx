import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Logo} from '../lib';

type StoryProps = ComponentProps<typeof Logo>;

const meta: Meta<StoryProps> = {
  component: Logo,
  tags: ['autodocs'],
  args: {
    src: 'https://example.com/logo.png',
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({...args}) => <Logo {...args} />,
};
