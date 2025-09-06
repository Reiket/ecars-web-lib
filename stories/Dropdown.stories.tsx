import type {Meta, StoryObj} from '@storybook/react';

import type {ComponentProps} from 'react';
import {Dropdown, dropdownOptionsMock} from '../lib';
import {useDropdown} from '../lib/services/hooks/useDropdown';
import {DROPDOWN_THEME} from '../lib/components/Dropdown/constants';

type StoryProps = ComponentProps<typeof Dropdown>;

const meta: Meta<StoryProps> = {
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      options: Object.values(DROPDOWN_THEME),
      control: {
        type: 'select',
      },
    },
  },
  args: {
    options: dropdownOptionsMock,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({...args}) => {
    const {isDropdownOpen, handleOpenClick, handleOutside, selectedOption, handleSelect} =
      useDropdown(dropdownOptionsMock);
    return (
      <Dropdown
        {...args}
        onClickOutside={handleOutside}
        isOpen={isDropdownOpen}
        handleOpen={handleOpenClick}
        onSelect={handleSelect}
        selectedOption={selectedOption}
      />
    );
  },
};
