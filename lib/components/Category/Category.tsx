import type {FC} from 'react';
import type {CategoriesListType} from '@/components/Category/constants';
import {CATEGORY_TEST_ID} from '@/components/Category/constants';
import {cn} from '@/services/helpers';
import type {ElementProps} from '@/services/types';

interface Props extends ElementProps {
  category: CategoriesListType;
}

export const Category: FC<Props> = ({category, block}) => {
  const classNames = cn(block, 'category', `category--${category}`);
  return (
    <span
      data-testid={CATEGORY_TEST_ID}
      className={classNames}
    >
      {category}
    </span>
  );
};
