import type {FC, ReactNode} from 'react';
import {cn} from '@/services/helpers';
import type {ElementProps} from '@/services/types';
import {BUTTON_CATEGORY_TEST_ID} from '@/components/ButtonCategory/constants';

interface Props extends ElementProps {
  isActive: boolean;
  children: ReactNode;
  onClick: () => void;
}

export const ButtonCategory: FC<Props> = ({block, isActive, onClick, children}) => (
  <button
    data-testid={BUTTON_CATEGORY_TEST_ID}
    onClick={onClick}
    className={cn(block, 'button-category', {
      '_active': isActive,
    })}
  >
    {children}
  </button>
);
