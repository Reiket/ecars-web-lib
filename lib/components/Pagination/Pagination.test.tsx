import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {
  Pagination,
  PAGINATION_ARROW_LEFT_TEST_ID,
  PAGINATION_ARROW_RIGHT_TEST_ID,
  PAGINATION_TEST_ID,
} from '@/components/Pagination/constants';

const props = {
  pages: [1, 2, 3],
  currentPage: 1,
  onPageClick: jest.fn(),
  onNextClick: jest.fn(),
  onPrevClick: jest.fn(),
};

describe('Pagination component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders component with all page buttons and arrows', () => {
    const {container} = render(<Pagination {...props} />);

    const paginationElement = screen.getByTestId(PAGINATION_TEST_ID);
    const leftArrowElement = screen.getByTestId(PAGINATION_ARROW_LEFT_TEST_ID);
    const rightArrowElement = screen.getByTestId(PAGINATION_ARROW_RIGHT_TEST_ID);
    expect(paginationElement).toBeInTheDocument();
    expect(leftArrowElement).toBeInTheDocument();
    expect(rightArrowElement).toBeInTheDocument();
    props.pages.forEach((page) => {
      expect(screen.getByText(String(page))).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });

  test('disables prev arrow on first page', () => {
    const firstPage = props.pages.at(0) ?? 0;
    const lastPage = props.pages.at(-1) ?? 0;
    const {container, rerender} = render(
      <Pagination
        {...props}
        currentPage={firstPage}
      />,
    );

    const leftArrowElement = screen.getByTestId(PAGINATION_ARROW_LEFT_TEST_ID).parentElement;
    const rightArrowElement = screen.getByTestId(PAGINATION_ARROW_RIGHT_TEST_ID).parentElement;

    expect(leftArrowElement).toBeDisabled();

    rerender(
      <Pagination
        {...props}
        currentPage={lastPage}
      />,
    );

    expect(rightArrowElement).toBeDisabled();
    expect(container).toMatchSnapshot();
  });

  test('calls onPageClick when page button is clicked', () => {
    render(
      <Pagination
        {...props}
        currentPage={2}
      />,
    );

    fireEvent.click(screen.getByText('2'));
    expect(props.onPageClick).toHaveBeenCalledWith(2);
  });
  test('marks the current page as selected', () => {
    render(<Pagination {...props} />);

    expect(screen.getByText('1')).toHaveClass('_current-page');
  });
  test('calls onPrevClick and onNextClick', () => {
    render(
      <Pagination
        {...props}
        currentPage={2}
      />,
    );

    const leftArrowElement = screen.getByTestId(PAGINATION_ARROW_LEFT_TEST_ID).parentElement;
    const rightArrowElement = screen.getByTestId(PAGINATION_ARROW_RIGHT_TEST_ID).parentElement;

    if (leftArrowElement) {
      fireEvent.click(leftArrowElement);
      expect(props.onPrevClick).toHaveBeenCalled();
    }

    if (rightArrowElement) {
      fireEvent.click(rightArrowElement);
      expect(props.onNextClick).toHaveBeenCalled();
    }
  });
  test('disables all buttons and arrows when loading', () => {
    render(
      <Pagination
        {...props}
        isLoading
      />,
    );

    const leftArrow = screen.getByTestId(PAGINATION_ARROW_LEFT_TEST_ID).parentElement;
    const rightArrow = screen.getByTestId(PAGINATION_ARROW_RIGHT_TEST_ID).parentElement;
    expect(leftArrow).toBeDisabled();
    expect(rightArrow).toBeDisabled();

    props.pages.forEach((page) => {
      expect(screen.getByText(String(page))).toBeDisabled();
    });

    fireEvent.click(screen.getByText('1'));
    if (leftArrow) {
      fireEvent.click(leftArrow);
    }
    if (rightArrow) {
      fireEvent.click(rightArrow);
    }
    expect(props.onPageClick).not.toHaveBeenCalled();
    expect(props.onPrevClick).not.toHaveBeenCalled();
    expect(props.onNextClick).not.toHaveBeenCalled();
  });
});
