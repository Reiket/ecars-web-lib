import type {FC} from 'react';
import {cn} from '@/services/helpers';
import type {DropdownOption as DropdownOptionType} from '@/components/Dropdown/constants';

export interface Props {
  isSelected: boolean;
  option: DropdownOptionType;
  onSelect: (option: DropdownOptionType) => void;
}

export const DropdownOption: FC<Props> = ({option, isSelected, onSelect}) => {
  const {label, value, name} = option;
  const handleSelect = () => {
    onSelect(option);
  };
  return (
    <li
      data-value={value}
      onClick={handleSelect}
      className={cn('', 'dropdown-menu__option', {
        '_selected-option': isSelected,
      })}
    >
      {label && label} {name}
    </li>
  );
};
