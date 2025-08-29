import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Field, Input} from '../lib';

type StoryProps = ComponentProps<typeof Field>;

const meta: Meta<StoryProps> = {
  component: Field,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({...args}) => {
    return (
      <Field {...args}>
        <Input
          id={args.id}
          hasError={!!args.error}
          value="Email"
          placeholder="Your email"
        />
      </Field>
    );
  },
};
