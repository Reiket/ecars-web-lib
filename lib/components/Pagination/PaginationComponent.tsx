import type {FC} from 'react';
import type {PaginationProps} from '@/components/Pagination/constants';
import {Pagination, PAGINATION_TEST_ID} from '@/components/Pagination/constants';
import type {ElementProps} from '@/services/types';

interface Props extends PaginationProps, ElementProps {}

export const PaginationComponent: FC<Props> = (props) => {
  return (
    <div
      data-testid={PAGINATION_TEST_ID}
      className="pagination"
    >
      <Pagination.Body {...props} />
    </div>
  );
};
