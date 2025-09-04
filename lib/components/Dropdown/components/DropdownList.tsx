import type {FC} from 'react';
import type {DropdownProps} from '@/components/Dropdown/constants';
import {Dropdown} from '@/components/Dropdown';

export const DropdownList: FC<DropdownProps> = ({selectedOption, options, onSelect}) => (
  <ul className="dropdown-menu__list">
    {options.map((option) => {
      const {value} = option;
      const isSelected = value === selectedOption.value;
      return (
        <Dropdown.Option
          key={value}
          option={option}
          onSelect={onSelect}
          isSelected={isSelected}
        />
      );
    })}
  </ul>
);
