import {useMemo, useState} from 'react';

interface UsePaginationResult {
  currentPage: number;
  pages: number[];
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToPrevPage: () => void;
}

export const usePagination = (totalCount: number, pageSize: number, initialPage = 1): UsePaginationResult => {
  const totalPages = useMemo(() => Math.ceil(totalCount / pageSize), [totalCount, pageSize]);

  const [currentPage, setCurrentPage] = useState(initialPage);

  const pages = useMemo(() => {
    return Array.from({length: totalPages}, (_, i) => i + 1);
  }, [totalPages]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    currentPage,
    pages,
    goToPage,
    goToNextPage,
    goToPrevPage,
  };
};
