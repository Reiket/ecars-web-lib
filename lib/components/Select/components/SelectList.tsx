import type {FC} from 'react';
import {Select} from '@/components/Select/constants';

export interface Props {
  options: string[] | null;
  onClick: (value: string) => void;
  value: string;
}

export const SelectList: FC<Props> = ({options, onClick, value}) => {
  if (!options) {
    return (
      <ul className="select__options">
        <li className="select__option select__option_empty">Nothing found</li>
      </ul>
    );
  }

  return (
    <ul className="select__options">
      {options.map((option) => {
        const isSelected = option === value;
        const onOptionClick = () => {
          onClick(option);
        };
        return (
          <Select.Option
            key={option}
            isSelected={isSelected}
            onOptionClick={onOptionClick}
            option={option}
          />
        );
      })}
    </ul>
  );
};
