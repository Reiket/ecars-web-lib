export const PAGINATION_ARROW_DIRECTION = Object.freeze({
  LEFT: 'left',
  RIGHT: 'right',
});

export interface PaginationProps {
  pages: number[];
  currentPage: number;
  onPageClick: (page: number) => void;
  onNextClick: () => void;
  onPrevClick: () => void;
  isLoading?: boolean;
}

export type PaginationArrowDirection = (typeof PAGINATION_ARROW_DIRECTION)[keyof typeof PAGINATION_ARROW_DIRECTION];

export const PAGINATION_TEST_ID = 'paginationTestId';
export const PAGINATION_ARROW_LEFT_TEST_ID = 'paginationArrowLeftTestId';
export const PAGINATION_ARROW_RIGHT_TEST_ID = 'paginationArrowRightTestId';
