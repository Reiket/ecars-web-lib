import type {FC} from 'react';
import {cn} from '@/services/helpers';

export interface Props {
  isSelected: boolean;
  page: number;
  disabled?: boolean;
  onClick?: () => void;
}

export const PaginationPage: FC<Props> = ({onClick, isSelected, page, disabled = false}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={cn('', 'pagination__button', {
      '_current-page': isSelected,
    })}
  >
    {page}
  </button>
);
