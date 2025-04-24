import type {FC, ReactNode} from 'react';
import {SELECT_TEST_ID} from '@/components/Select/constants';
import {cn} from '@/services/helpers';
import {useClickOutside} from '@/services/hooks/useClickOutside';
import type {ElementProps} from '@/services/types';

export interface Props extends ElementProps {
  children: ReactNode;
  onClickOutside: (isOpen: boolean) => void;
  isOpen: boolean;
  disabled?: boolean;
}

export const SelectWrapper: FC<Props> = ({children, isOpen, onClickOutside, block, disabled = false}) => {
  const selectRef = useClickOutside(onClickOutside);
  return (
    <div
      ref={selectRef}
      data-testid={SELECT_TEST_ID}
      className={cn(block, 'select', {
        '_open': isOpen,
        'disabled': disabled,
      })}
    >
      {children}
    </div>
  );
};
