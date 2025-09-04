import type {FC} from 'react';
import {Dropdown} from '@/components/Dropdown';
import {dropdownOptionsMock} from '@/services/mocks';
import {useDropdown} from '@src/services/hooks/useDropdown';

export const DropdownExample: FC = () => {
  const {isDropdownOpen, handleOpenClick, handleOutside, selectedOption, handleSelect} =
    useDropdown(dropdownOptionsMock);
  return (
    <Dropdown
      theme="dark"
      onClickOutside={handleOutside}
      isOpen={isDropdownOpen}
      handleOpen={handleOpenClick}
      onSelect={handleSelect}
      selectedOption={selectedOption}
      options={dropdownOptionsMock}
    />
  );
};
