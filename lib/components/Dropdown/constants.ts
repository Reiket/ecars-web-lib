import type {ReactNode} from 'react';

export interface DropdownOption {
  value: string;
  name: string;
  label?: ReactNode;
}

export interface DropdownProps {
  onSelect: (option: DropdownOption) => void;
  selectedOption: DropdownOption;
  options: DropdownOption[];
}

export const DROPDOWN_TEST_ID = 'dropdownTestId';

export const DROPDOWN_THEME = Object.freeze({
  DARK: 'dark',
  LIGHT: 'light',
});

export type DropdownThemeType = (typeof DROPDOWN_THEME)[keyof typeof DROPDOWN_THEME];
