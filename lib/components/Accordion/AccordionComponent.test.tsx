import {fireEvent, render, screen} from '@testing-library/react';
import {ACCORDION_TEST_ID} from '@/components/Accordion/constants';
import {Accordion} from '@/components/Accordion';

const defaultProps = {
  isOpen: false,
  textContent: 'Test content',
  title: 'Test title',
  onClick: vi.fn(),
};
describe('Accordion Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  const isOpenValues = [true, false];
  const renderAccordion = (props = {}) => {
    const mergedProps = {...defaultProps, ...props};
    return render(<Accordion {...mergedProps} />);
  };

  test('renders the accordion component and title, text correctly', () => {
    const {container} = renderAccordion();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.textContent)).toBeInTheDocument();
    expect(screen.getByTestId(ACCORDION_TEST_ID)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  isOpenValues.forEach((isOpen) => {
    const isOpenString = `should ${isOpen ? 'open' : 'close'} the content`;
    test(isOpenString, () => {
      const {container} = renderAccordion({isOpen});
      const content = screen.getByText(defaultProps.textContent);
      const accordionElement = screen.getByTestId(ACCORDION_TEST_ID);
      if (isOpen) {
        expect(content).toBeVisible();
        expect(accordionElement).toHaveClass('_active');
      } else {
        expect(content.offsetHeight).toBe(0);
        expect(accordionElement).not.toHaveClass('_active');
        expect(container).toMatchSnapshot();
      }
    });
  });
  test('triggers onClick handler when title is clicked', () => {
    renderAccordion();
    fireEvent.click(screen.getByText(defaultProps.title));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
