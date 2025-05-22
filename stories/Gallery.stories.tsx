import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Gallery} from '../lib/components/Gallery/Gallery';
import {imagesMock} from '../lib/services/mocks';

type StoryProps = ComponentProps<typeof Gallery>;

const meta: Meta<StoryProps> = {
  component: Gallery,
  tags: ['autodocs'],
  args: {
    images: imagesMock,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({...args}) => <Gallery {...args} />,
};
