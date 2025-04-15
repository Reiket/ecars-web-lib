import type {FC} from 'react';
import {Select} from '@/components/Select/constants';

import {selectOptionsMock} from '@/services/mocks';
import {useSelect} from '../services/hooks/useSelect';

export const SelectExample: FC = () => {
  const {selectedValue, handleChange, onClickToOptions, handleOutside, isOpen, toggleOpen} = useSelect();
  return (
    <Select
      hasSearch={true}
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
