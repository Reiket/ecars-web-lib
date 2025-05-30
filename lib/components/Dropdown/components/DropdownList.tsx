import type {FC} from 'react';
import type {DropdownProps} from '@/components/Dropdown/constants';
import {Dropdown} from '@/components/Dropdown/constants';

export const DropdownList: FC<DropdownProps> = ({category, options, onSelect}) => {
  return (
    <ul className="dropdown-menu__list">
      {options.map((option) => {
        const {value, label} = option;
        const isSelected = value === category;
        return (
          <Dropdown.Option
            key={value}
            value={value}
            label={label}
            onSelect={onSelect}
            isSelected={isSelected}
          />
        );
      })}
    </ul>
  );
};
