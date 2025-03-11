import {ComponentProps} from 'react';

import {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Button} from '../lib';
import {BUTTON_COLOR, BUTTON_SIZE, ButtonAttributesType} from '../lib/components/Button/constants';

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: Object.values(BUTTON_COLOR),
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.values(BUTTON_SIZE),
      control: {
        type: 'select',
      },
    },
    type: {
      options: ['button', 'submit', 'reset'] as ButtonAttributesType[],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    color: BUTTON_COLOR.GRAY,
    size: BUTTON_SIZE.BIG,
    type: 'button',
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: 'Blue',
  },
  render: ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
