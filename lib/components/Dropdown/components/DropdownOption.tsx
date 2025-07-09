import type {FC, ReactNode} from 'react';
import {cn} from '@/services/helpers';

export interface Props {
  isSelected: boolean;
  value: string;
  label?: ReactNode;
  onSelect: (value: string) => void;
}

export const DropdownOption: FC<Props> = ({label, value, isSelected, onSelect}) => {
  const handleSelect = () => {
    onSelect(value);
  };
  return (
    <li
      onClick={handleSelect}
      className={cn('', 'dropdown-menu__option', {
        '_selected-option': isSelected,
      })}
    >
      {label && label} {value}
    </li>
  );
};
