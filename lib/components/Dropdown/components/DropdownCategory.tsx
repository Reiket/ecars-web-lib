import type {FC} from 'react';
import {Icons} from '@/services/icons';
import type {DropdownOption} from '@/components/Dropdown/constants';

export interface Props {
  item?: DropdownOption;
  handleOpen: () => void;
}

export const DropdownCategory: FC<Props> = ({item, handleOpen}) => (
  <button
    onClick={handleOpen}
    className="dropdown-menu__category"
  >
    {item?.label}
    {item?.value}
    <Icons.ArrowNarrowDown className="dropdown-menu__arrow" />
  </button>
);
