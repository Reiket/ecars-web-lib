import type {FC} from 'react';

import {selectOptionsMock} from '@/services/mocks';
import {useSelect} from '../services/hooks/useSelect';
import {Select} from '@/components/Select';

export const SelectExample: FC = () => {
  const {selectedValue, handleChange, onClickToOptions, handleOutside, isOpen, toggleOpen} = useSelect();
  return (
    <Select
      hasSearch
      placeholder="Select"
      onChange={handleChange}
      value={selectedValue}
      onClickToOptions={onClickToOptions}
      handleSelect={handleOutside}
      onClick={toggleOpen}
      isOpen={isOpen}
      options={selectOptionsMock}
    />
  );
};
