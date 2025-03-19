import {ComponentProps} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {NavLink} from '../lib/components/NavLink/NavLink';
import {MemoryRouter} from 'react-router';
import {MOCK_ROUTE_LINK} from '../lib/components/NavLink/constants';

type StoryProps = ComponentProps<typeof NavLink> & {
  linkText: string;
  to: string;
};

const meta: Meta<StoryProps> = {
  component: NavLink,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
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
    to: MOCK_ROUTE_LINK,
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
