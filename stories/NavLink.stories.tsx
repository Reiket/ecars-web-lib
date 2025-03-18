import {ComponentProps} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {NavLink} from '../lib/components/NavLink/NavLink';
import {MemoryRouter} from 'react-router';

type StoryProps = ComponentProps<typeof NavLink> & {
  linkText: string;
  to: string;
};

const meta: Meta<StoryProps> = {
  component: NavLink,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/active']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    linkText: 'Blue',
    to: '/storybook',
  },
  render: ({linkText, to, ...args}) => {
    return (
      <NavLink
        to={to}
        {...args}
      >
        {linkText}
      </NavLink>
    );
  },
};
