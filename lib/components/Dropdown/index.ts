import {DropdownComponent} from '@/components/Dropdown/DropdownComponent';
import {DropdownList} from '@/components/Dropdown/components/DropdownList';
import {DropdownOption} from '@/components/Dropdown/components/DropdownOption';
import {DropdownCategory} from '@/components/Dropdown/components/DropdownCategory';
import {DropdownBlock} from '@/components/Dropdown/components/DropdownBlock';

export const Dropdown = Object.assign(DropdownComponent, {
  List: DropdownList,
  Option: DropdownOption,
  Category: DropdownCategory,
  Block: DropdownBlock,
});
