import type {FC} from 'react';
import type {InputProps} from '@/components/Input/Input';
import {Input} from '@/components/Input/Input';

interface Props extends InputProps {
  hasSearch: boolean;
}

export const SelectInput: FC<Props> = ({onChange, hasSearch, ...props}) => {
  return (
    <Input
      isReadOnly={!hasSearch}
      isTransparent
      onChange={onChange}
      {...props}
    />
  );
};
