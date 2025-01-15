import {ComponentProps} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {Button} from "@ecars/components";
import {fn} from '@storybook/test';

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['blue', 'red'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: 'Blue',
    color: 'blue',
  },
  render: ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
