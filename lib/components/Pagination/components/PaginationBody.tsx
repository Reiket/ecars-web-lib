import type {FC} from 'react';
import type {PaginationProps} from '@/components/Pagination/constants';
import {Pagination} from '@/components/Pagination/constants';

export const PaginationBody: FC<PaginationProps> = ({
  pages,
  currentPage,
  onPageClick,
  onPrevClick,
  onNextClick,
  isLoading = false,
}) => {
  const isFirstPage = currentPage === 1 || isLoading;
  const isLastPage = currentPage === pages.at(-1) || isLoading;

  const renderPages = () =>
    pages.map((page) => {
      const isSelected = page === currentPage;
      const handlePage = () => {
        onPageClick(page);
      };
      return (
        <Pagination.Page
          isSelected={isSelected}
          onClick={handlePage}
          disabled={isLoading}
          key={page}
          page={page}
        />
      );
    });

  return (
    <div className="pagination__body">
      <Pagination.Arrow
        disabled={isFirstPage}
        onClick={onPrevClick}
        direction="left"
      />
      {renderPages()}
      <Pagination.Arrow
        disabled={isLastPage}
        onClick={onNextClick}
        direction="right"
      />
    </div>
  );
};
