import type {ReactNode} from 'react';

export interface DropdownOption {
  value: string;
  label?: ReactNode;
}

export interface DropdownProps {
  onSelect: (value: string) => void;
  category: string;
  options: DropdownOption[];
}

export const DROPDOWN_TEST_ID = 'dropdownTestId';
