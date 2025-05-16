import type {FC} from 'react';
import {Pagination} from '@/components/Pagination/constants';
import {usePagination} from '@src/services/hooks/usePagination';
import {pageSizeMock, totalCountPageMock} from '@/services/mocks';

export const PaginationExample: FC = () => {
  const {currentPage, goToPage, pages, goToPrevPage, goToNextPage} = usePagination(totalCountPageMock, pageSizeMock);

  return (
    <Pagination
      pages={pages}
      currentPage={currentPage}
      onPageClick={goToPage}
      onNextClick={goToNextPage}
      onPrevClick={goToPrevPage}
    />
  );
};
