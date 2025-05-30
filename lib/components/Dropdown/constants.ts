import {DropdownComponent} from '@/components/Dropdown/DropdownComponent';
import {DropdownList} from '@/components/Dropdown/components/DropdownList';
import type {ReactNode} from 'react';
import {DropdownOption} from '@/components/Dropdown/components/DropdownOption';
import {DropdownCategory} from '@/components/Dropdown/components/DropdownCategory';
import {DropdownBlock} from '@/components/Dropdown/components/DropdownBlock';

export const Dropdown = Object.assign(DropdownComponent, {
  List: DropdownList,
  Option: DropdownOption,
  Category: DropdownCategory,
  Block: DropdownBlock,
});

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
