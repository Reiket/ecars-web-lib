import type {FC} from 'react';
import {cn} from '@/services/helpers';

interface Props {
  isSelected: boolean;
  onOptionClick: () => void;
  option: string;
}

export const SelectOption: FC<Props> = ({isSelected, option, onOptionClick}) => (
  <li
    className={cn('', 'select__option', {
      '_selected': isSelected,
    })}
    onClick={onOptionClick}
  >
    {option}
  </li>
);
