import {cleanup, render, screen} from '@testing-library/react';
import {CATEGORIES_LIST, CATEGORY_TEST_ID} from '@/components/Category/constants';
import {Category} from '@/components/Category/Category';
import '@testing-library/jest-dom';

describe('Category component', () => {
  afterEach(cleanup);
  const categories = Object.values(CATEGORIES_LIST);
  categories.forEach((category) => {
    const testName = `renders category with ${category}-category`;
    test(testName, () => {
      const {container} = render(<Category category={category} />);
      const categoryElement = screen.getByTestId(CATEGORY_TEST_ID);
      expect(categoryElement).toBeInTheDocument();
      expect(categoryElement).toHaveClass(`category-${category}`);
      expect(container).toMatchSnapshot();
    });
  });
});
