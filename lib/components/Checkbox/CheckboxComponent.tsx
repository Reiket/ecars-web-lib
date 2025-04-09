import type {FC} from 'react';
import type {CheckboxProps} from '@/components/Checkbox/constants';
import {Checkbox} from '@/components/Checkbox/constants';

export const CheckboxComponent: FC<CheckboxProps> = ({id, block, ...props}) => {
  return (
    <Checkbox.Block
      htmlFor={id}
      block={block}
    >
      <Checkbox.Input
        {...props}
        id={id}
      />
      <Checkbox.Indicator />
    </Checkbox.Block>
  );
};
