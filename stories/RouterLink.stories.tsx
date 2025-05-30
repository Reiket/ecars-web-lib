import {ComponentProps, ComponentType} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {RouterLink} from '../lib/components/RouterLink/RouterLink';
import {ROUTER_LINK_COLOR} from '../lib/components/RouterLink/constants';
import {LinkWithIcon} from '../lib/components/LinkWithIcon/LinkWithIcon';
import {Icons} from '../lib/services/icons';

type StoryProps = ComponentProps<typeof RouterLink> & {
  linkText: string;
  href?: string;
};

type LinkIconStoryProps = ComponentProps<typeof LinkWithIcon> & {
  linkText: string;
  href?: string;
};

const meta: Meta<StoryProps> = {
  component: RouterLink,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: Object.values(ROUTER_LINK_COLOR),
      control: {type: 'select'},
    },
    withIcon: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    color: ROUTER_LINK_COLOR.GRAY,
  },
};

export default meta;

const createLinkWithIconStory = (LeftIcon?: ComponentType, RightIcon?: ComponentType) => {
  return {
    render: ({linkText, ...args}: LinkIconStoryProps) => (
      <LinkWithIcon
        {...args}
        LeftIcon={LeftIcon}
        RightIcon={RightIcon}
      >
        {linkText}
      </LinkWithIcon>
    ),
  };
};

type Story = StoryObj<StoryProps>;
type StoryLinkIcon = StoryObj<LinkIconStoryProps>;

export const Primary: Story = {
  args: {
    linkText: 'Blue',
    href: '/',
  },
  render: ({linkText, ...args}) => {
    return <RouterLink {...args}>{linkText}</RouterLink>;
  },
};

export const LinkWithTwoIcon: StoryLinkIcon = {
  args: {
    linkText: 'All icons',
    href: '/',
    RightIcon: Icons.ArrowNarrowRight,
    LeftIcon: Icons.ArrowNarrowLeft,
  },
  ...createLinkWithIconStory(Icons.ArrowNarrowLeft, Icons.ArrowNarrowRight),
};

export const LinkWithRightIcon: StoryLinkIcon = {
  args: {
    linkText: 'Right Only',
    href: '/',
    RightIcon: Icons.ArrowNarrowRight,
  },
  ...createLinkWithIconStory(undefined, Icons.ArrowNarrowRight),
};

export const LinkWithLeftIcon: StoryLinkIcon = {
  args: {
    linkText: 'Left Only',
    href: '/',
    LeftIcon: Icons.ArrowNarrowLeft,
  },
  ...createLinkWithIconStory(Icons.ArrowNarrowLeft, undefined),
};
