import type {FC} from 'react';
import {Dropdown} from '@/components/Dropdown/constants';
import {dropdownOptionsMock} from '@/services/mocks';
import {useDropdown} from '@src/services/hooks/useDropdown';

export const DropdownExample: FC = () => {
  const {isDropdownOpen, handleOpenClick, handleOutside, selectedCategory, handleSelect} =
    useDropdown(dropdownOptionsMock);
  return (
    <Dropdown
      onClickOutside={handleOutside}
      isOpen={isDropdownOpen}
      handleOpen={handleOpenClick}
      onSelect={handleSelect}
      category={selectedCategory}
      options={dropdownOptionsMock}
    />
  );
};
