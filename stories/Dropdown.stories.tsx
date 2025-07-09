import {Meta, StoryObj} from '@storybook/react';

import type {ComponentProps} from 'react';
import {dropdownOptionsMock} from '../lib/services/mocks';
import {Dropdown} from '../lib/components/Dropdown';
import {useDropdown} from '../src/services/hooks/useDropdown';

type StoryProps = ComponentProps<typeof Dropdown>;

const meta: Meta<StoryProps> = {
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    options: dropdownOptionsMock,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({...args}) => {
    const {isDropdownOpen, handleOpenClick, handleOutside, selectedCategory, handleSelect} =
      useDropdown(dropdownOptionsMock);
    return (
      <Dropdown
        {...args}
        onClickOutside={handleOutside}
        isOpen={isDropdownOpen}
        handleOpen={handleOpenClick}
        onSelect={handleSelect}
        category={selectedCategory}
      />
    );
  },
};
