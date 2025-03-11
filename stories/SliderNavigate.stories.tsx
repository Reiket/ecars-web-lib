import {ComponentProps} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {SliderNavigate} from '../lib/components/SliderNavigate/SliderNavigate';
import {NavigateButton} from '../lib/components/SliderNavigate/NavigateButton';
import {NAVIGATE_BUTTON_PLACEMENT} from '../lib/components/SliderNavigate/constants';

type StoryProps = ComponentProps<typeof SliderNavigate>;
type ButtonStoryProps = ComponentProps<typeof NavigateButton>;

const meta: Meta<StoryProps> = {
  component: SliderNavigate,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      options: Object.values(NAVIGATE_BUTTON_PLACEMENT),
      control: {
        type: 'select',
      },
    },
  },
  args: {
    placement: NAVIGATE_BUTTON_PLACEMENT.LEFT,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;
type StoryButton = StoryObj<ButtonStoryProps>;

export const Primary: Story = {
  render: () => {
    return <SliderNavigate />;
  },
};

export const ButtonOnly: StoryButton = {
  render: ({...args}) => {
    return <NavigateButton {...args} />;
  },
};
