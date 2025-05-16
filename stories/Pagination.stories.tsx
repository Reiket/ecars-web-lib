import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Pagination} from '../lib/components/Pagination/constants';
import {PaginationExample} from '../src/components/PaginationExample';

type StoryProps = ComponentProps<typeof Pagination>;

const meta: Meta<StoryProps> = {
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => <PaginationExample />,
};
