import type {FC} from 'react';
import type {ElementProps} from '@/services/types';
import {cn} from '@/services/helpers';
import type {DropdownProps} from './constants';
import {DROPDOWN_TEST_ID} from './constants';
import {useClickOutside} from '@/services/hooks/useClickOutside';
import {Dropdown} from '@/components/Dropdown';

export interface Props extends ElementProps, DropdownProps {
  handleOpen: () => void;
  onClickOutside: (isOpen: boolean) => void;
  isOpen: boolean;
}
export const DropdownComponent: FC<Props> = ({
  category,
  block,
  options,
  onSelect,
  handleOpen,
  isOpen,
  onClickOutside,
}) => {
  const selectedOption = options.find((option) => option.value === category);
  const dropdownRef = useClickOutside(onClickOutside);
  return (
    <div
      data-testid={DROPDOWN_TEST_ID}
      ref={dropdownRef}
      className={cn(block, 'dropdown-menu', {
        '_dropdown-active': isOpen,
      })}
    >
      <Dropdown.Block>
        <Dropdown.Category
          handleOpen={handleOpen}
          item={selectedOption}
        />
      </Dropdown.Block>
      <Dropdown.List
        onSelect={onSelect}
        options={options}
        category={category}
      />
    </div>
  );
};
