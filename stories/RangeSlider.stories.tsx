import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {RangeSlider} from '../lib/components/RangeSlider/RangeSlider';
import {RangeSliderExample} from '../src/components/RangeSliderExample';

type StoryProps = ComponentProps<typeof RangeSlider>;

const meta: Meta<StoryProps> = {
  component: RangeSlider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => <RangeSliderExample />,
};
