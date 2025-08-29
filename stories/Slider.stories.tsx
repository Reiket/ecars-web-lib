import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Slider} from '../lib';
import {SliderExample} from '../src/components/SliderExample';

type StoryProps = ComponentProps<typeof Slider>;

const meta: Meta<StoryProps> = {
  component: Slider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => <SliderExample />,
};
