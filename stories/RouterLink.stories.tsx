import {ComponentProps} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {RouterLink} from '../lib/components/RouterLink/RouterLink';
import {ROUTER_LINK_COLOR, ROUTER_LINK_SIZE} from '../lib/components/RouterLink/constants';

type StoryProps = ComponentProps<typeof RouterLink> & {
  linkText: string;
  href?: string;
};
const meta: Meta<StoryProps> = {
  component: RouterLink,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: Object.values(ROUTER_LINK_COLOR),
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.values(ROUTER_LINK_SIZE),
      control: {
        type: 'select',
      },
    },
  },
  args: {
    color: ROUTER_LINK_COLOR.GRAY,
    size: ROUTER_LINK_SIZE.BOLD,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    linkText: 'Blue',
    href: '/',
  },
  render: ({linkText, ...args}) => {
    return <RouterLink {...args}>{linkText}</RouterLink>;
  },
};
