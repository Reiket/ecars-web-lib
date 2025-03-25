export const CATEGORIES_LIST = Object.freeze({
  GUIDES: 'guides',
  REVIEWS: 'reviews',
  NEWS: 'news',
});

export type CategoriesListType = (typeof CATEGORIES_LIST)[keyof typeof CATEGORIES_LIST];

export const CATEGORY_TEST_ID = 'categoryTestId';
