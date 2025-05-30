import {useState} from 'react';
import {useMatchMedia} from '@/services/hooks/useMatchMedia';
import type {DropdownOption} from '@/components/Dropdown/constants';

interface UseDropdownResult {
  selectedCategory: string;
  isDropdownOpen: boolean;
  handleOpenClick: () => void;
  handleOutside: (isOpen: boolean) => void;
  handleSelect: (value: string) => void;
}

export const useDropdown = (options: DropdownOption[]): UseDropdownResult => {
  const [selectedCategory, setSelectedCategory] = useState<string>(options[0].value);
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

  const handleSelect = (value: string): void => {
    setSelectedCategory(value);
    if (isCoarse) {
      setIsDropdownOpen(false);
    }
  };

  return {
    selectedCategory,
    isDropdownOpen,
    handleOpenClick,
    handleOutside,
    handleSelect,
  };
};
