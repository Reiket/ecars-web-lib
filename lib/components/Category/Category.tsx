import type {FC} from 'react';
import {CategoriesListType, CATEGORY_TEST_ID} from '@/components/Category/constants';
import {cn} from '@/services/helpers';

interface Props {
  category: CategoriesListType;
}

export const Category: FC<Props> = ({category}) => {
  const classNames = cn('category', `category-${category}`);
  return (
    <span
      data-testid={CATEGORY_TEST_ID}
      className={classNames}
    >
      {category}
    </span>
  );
};
