import type {FC} from 'react';
import {Icons} from '@/services/icons';
import type {PaginationArrowDirection} from '@/components/Pagination/constants';
import {
  PAGINATION_ARROW_DIRECTION,
  PAGINATION_ARROW_LEFT_TEST_ID,
  PAGINATION_ARROW_RIGHT_TEST_ID,
} from '@/components/Pagination/constants';

interface Props {
  direction: PaginationArrowDirection;
  disabled?: boolean;
  onClick: () => void;
}

export const PaginationArrow: FC<Props> = ({onClick, direction, disabled = false}) => {
  const handleDirection = () => {
    if (direction === PAGINATION_ARROW_DIRECTION.LEFT) {
      return (
        <Icons.ArrowNarrowLeft
          data-testid={PAGINATION_ARROW_LEFT_TEST_ID}
          className="pagination__arrow"
        />
      );
    }
    return (
      <Icons.ArrowNarrowRight
        data-testid={PAGINATION_ARROW_RIGHT_TEST_ID}
        className="pagination__arrow"
      />
    );
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="pagination__button"
    >
      {handleDirection()}
    </button>
  );
};
