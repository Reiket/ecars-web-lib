import {fireEvent, render, screen} from '@testing-library/react';
import {Accordion, ACCORDION_TEST_ID} from '@/components/Accordion/constants';
import {AccordionExample} from '@src/components/AccordionExample';
import {accordionContentMock} from '@src/services/mocks';

const defaultProps = {
  isOpen: false,
  textContent: 'Test content',
  title: 'Test title',
  onClick: jest.fn(),
};
describe('Accordion Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
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

      if (isOpen) {
        expect(content).toBeVisible();
      } else {
        expect(content.offsetHeight).toBe(0);
        expect(container).toMatchSnapshot();
      }
    });
  });
  test('triggers onClick handler when title is clicked', () => {
    renderAccordion();
    fireEvent.click(screen.getByText(defaultProps.title));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
  test('closes previously opened accordion when another is clicked', () => {
    render(<AccordionExample items={accordionContentMock} />);

    const getAccordionElements = () =>
      accordionContentMock.map((item) => ({
        titleElement: screen.getByText(item.title),
        contentElement: screen.getByText(item.text),
      }));

    const accordionElements = getAccordionElements();

    const checkAccordionVisibility = (clickIndex: number) => {
      accordionElements.forEach((_, index) => {
        const isVisible = index === clickIndex;
        const content = accordionElements[index].contentElement;

        if (isVisible) {
          expect(content).toBeVisible();
        } else {
          expect(content.offsetHeight).toBe(0);
        }
      });
    };

    accordionElements.forEach((_, clickIndex) => {
      fireEvent.click(accordionElements[clickIndex].titleElement);
      checkAccordionVisibility(clickIndex);
    });
  });
});
