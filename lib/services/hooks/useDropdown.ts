import {useState} from 'react';
import {useMatchMedia} from '@/services/hooks/useMatchMedia';
import type {DropdownOption} from '@/components/Dropdown/constants';

interface UseDropdownResult {
  selectedOption: DropdownOption;
  isDropdownOpen: boolean;
  handleOpenClick: () => void;
  handleOutside: (isOpen: boolean) => void;
  handleSelect: (option: DropdownOption) => void;
}

export const useDropdown = (options: DropdownOption[]): UseDropdownResult => {
  const [firstOption] = options;
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(firstOption);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const isCoarse = useMatchMedia('(pointer: coarse)');

  const handleOpenClick = (): void => {
    if (isCoarse) {
      setIsDropdownOpen((prev) => !prev);
    }
  };

  const handleOutside = (isOpen: boolean): void => {
    setIsDropdownOpen(isOpen);
  };

  const handleSelect = (option: DropdownOption): void => {
    setSelectedOption(option);
    if (isCoarse) {
      setIsDropdownOpen(false);
    }
  };

  return {
    selectedOption,
    isDropdownOpen,
    handleOpenClick,
    handleOutside,
    handleSelect,
  };
};
