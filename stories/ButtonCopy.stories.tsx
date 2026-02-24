import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {ButtonCopy} from '../lib/components/ButtonCopy/ButtonCopy';

type StoryProps = ComponentProps<typeof ButtonCopy>;

const meta: Meta<StoryProps> = {
  component: ButtonCopy,
  tags: ['autodocs'],
  args: {
    text: 'Copy',
    copyHref: 'https://example.com',
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: (args) => {
    return <ButtonCopy {...args} />;
  },
};
