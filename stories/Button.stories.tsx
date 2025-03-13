import type {ComponentProps, ComponentType, ReactNode} from 'react';

import {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Button} from '../lib';
import {BUTTON_COLOR, BUTTON_SIZE, ButtonAttributesType} from '../lib/components/Button/constants';
import {ButtonWithIcon} from '../lib/components/ButtonWithIcon/ButtonWithIcon';
import {Icons} from '../lib/services/icons';

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};
type ButtonIconStoryProps = ComponentProps<typeof ButtonWithIcon> & {
  buttonText: string;
  RightIcon?: ComponentType;
  LeftIcon?: ComponentType;
  children: ReactNode;
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
    withIcon: {
      table: {
        disable: true,
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
type ButtonStory = StoryObj<ButtonIconStoryProps>;

export const Primary: Story = {
  args: {
    buttonText: 'Blue',
  },
  render: ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const ButtonIcon: ButtonStory = {
  args: {
    buttonText: 'Blue',
    RightIcon: Icons.ArrowNarrowRight,
    LeftIcon: Icons.ArrowNarrowLeft,
  },
  render: ({buttonText, RightIcon, LeftIcon, ...args}) => {
    return (
      <ButtonWithIcon
        {...args}
        LeftIcon={LeftIcon}
        RightIcon={RightIcon}
      >
        {buttonText}
      </ButtonWithIcon>
    );
  },
};

export const ButtonWithRightIcon: ButtonStory = {
  args: {
    buttonText: 'Right Only',
    RightIcon: Icons.ArrowNarrowRight,
  },
  render: ({buttonText, RightIcon, ...args}) => {
    return (
      <ButtonWithIcon
        {...args}
        RightIcon={RightIcon}
      >
        {buttonText}
      </ButtonWithIcon>
    );
  },
};

export const ButtonWithLeftIcon: ButtonStory = {
  args: {
    buttonText: 'Left Only',
    LeftIcon: Icons.ArrowNarrowLeft,
  },
  render: ({buttonText, LeftIcon, ...args}) => {
    return (
      <ButtonWithIcon
        {...args}
        LeftIcon={LeftIcon}
      >
        {buttonText}
      </ButtonWithIcon>
    );
  },
};
