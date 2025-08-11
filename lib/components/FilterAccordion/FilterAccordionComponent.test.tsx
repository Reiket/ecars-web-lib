import {fireEvent, render, screen} from '@testing-library/react';
import {FILTER_ACCORDION_TEST_ID} from '@/components/FilterAccordion/constants';
import {FilterAccordion} from '@/components/FilterAccordion';

const defaultProps = {
  isOpen: false,
  children: 'Test content',
  title: 'Test title',
  onClick: vi.fn(),
};
describe('Filter Accordion Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  const isOpenValues = [true, false];
  const renderAccordion = (props = {}) => {
    const mergedProps = {...defaultProps, ...props};
    return render(<FilterAccordion {...mergedProps} />);
  };

  test('renders the filter accordion component and title, text correctly', () => {
    const {container} = renderAccordion();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.children)).toBeInTheDocument();
    expect(screen.getByTestId(FILTER_ACCORDION_TEST_ID)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  isOpenValues.forEach((isOpen) => {
    const isOpenString = `should ${isOpen ? 'open' : 'close'} the content`;
    test(isOpenString, () => {
      const {container} = renderAccordion({isOpen});
      const content = screen.getByText(defaultProps.children);
      const accordionElement = screen.getByTestId(FILTER_ACCORDION_TEST_ID);
      if (isOpen) {
        expect(content).toBeVisible();
        expect(accordionElement).toHaveClass('_active-accordion');
      } else {
        expect(content.offsetHeight).toBe(0);
        expect(accordionElement).not.toHaveClass('_active-accordion');
        expect(container).toMatchSnapshot();
      }
    });
  });
  test('triggers onClick handler when arrow is clicked', () => {
    renderAccordion();
    const filterAccordionElement = screen.getByTestId(FILTER_ACCORDION_TEST_ID);
    const buttonArrow = filterAccordionElement.querySelector('.filter-accordion__arrow');
    if (buttonArrow) {
      fireEvent.click(buttonArrow);
    }
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
