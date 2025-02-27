import {ComponentProps} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {FavButton} from '../lib/components/FavButton/FavButton';
import {FAV_BUTTON_TYPE} from '../lib/components/FavButton/constants';

type StoryProps = ComponentProps<typeof FavButton>

const meta: Meta<StoryProps> = {
  component: FavButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: Object.values(FAV_BUTTON_TYPE),
      control: {
        type: 'select',
      },
    },
  },
  args: {
    type: FAV_BUTTON_TYPE.CIRCLE,
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({ ...args}) => {
    return <FavButton {...args}/>;
  },
};