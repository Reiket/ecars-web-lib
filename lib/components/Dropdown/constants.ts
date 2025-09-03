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

export const DROPDOWN_THEME = Object.freeze({
  DARK: 'dark',
  LIGHT: 'light',
});

export type DropdownThemeType = (typeof DROPDOWN_THEME)[keyof typeof DROPDOWN_THEME];
