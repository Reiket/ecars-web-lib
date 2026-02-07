import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {ButtonCategory} from '../lib/components/ButtonCategory/ButtonCategory';

type StoryProps = ComponentProps<typeof ButtonCategory> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: ButtonCategory,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: 'button',
  },
  render: ({buttonText, ...args}) => {
    return <ButtonCategory {...args}>{buttonText}</ButtonCategory>;
  },
};
