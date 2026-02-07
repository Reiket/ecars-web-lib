import type {ComponentProps, ReactNode} from 'react';

import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Button, ButtonWithIcon, Icons, IconsType} from '../lib';
import type {ButtonAttributesType} from '../lib/components/Button/constants';
import {BUTTON_COLOR, BUTTON_SIZE} from '../lib/components/Button/constants';

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};
type ButtonIconStoryProps = ComponentProps<typeof ButtonWithIcon> & {
  buttonText: string;
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
type StoryButtonIcon = StoryObj<ButtonIconStoryProps>;

export const Primary: Story = {
  args: {
    buttonText: 'Blue',
  },
  render: ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

const createButtonWithIconStory = (LeftIcon?: IconsType, RightIcon?: IconsType) => {
  return {
    render: ({buttonText, ...args}: ButtonIconStoryProps) => (
      <ButtonWithIcon
        {...args}
        LeftIcon={LeftIcon}
        RightIcon={RightIcon}
      >
        {buttonText}
      </ButtonWithIcon>
    ),
  };
};

export const ButtonWithTwoIcon: StoryButtonIcon = {
  args: {
    buttonText: 'All icons',
    RightIcon: Icons.ArrowNarrowRight,
    LeftIcon: Icons.ArrowNarrowLeft,
  },
  ...createButtonWithIconStory(Icons.ArrowNarrowLeft, Icons.ArrowNarrowRight),
};

export const ButtonWithRightIcon: StoryButtonIcon = {
  args: {
    buttonText: 'Right Only',
    RightIcon: Icons.ArrowNarrowRight,
  },
  ...createButtonWithIconStory(undefined, Icons.ArrowNarrowRight),
};

export const ButtonWithLeftIcon: StoryButtonIcon = {
  args: {
    buttonText: 'Left Only',
    LeftIcon: Icons.ArrowNarrowLeft,
  },
  ...createButtonWithIconStory(Icons.ArrowNarrowLeft, undefined),
};
