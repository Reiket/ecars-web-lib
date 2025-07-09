import {PaginationComponent} from '@/components/Pagination/PaginationComponent';
import {PaginationPage} from '@/components/Pagination/components/PaginationPage';
import {PaginationArrow} from '@/components/Pagination/components/PaginationArrow';
import {PaginationBody} from '@/components/Pagination/components/PaginationBody';

export const Pagination = Object.assign(PaginationComponent, {
  Page: PaginationPage,
  Arrow: PaginationArrow,
  Body: PaginationBody,
});
