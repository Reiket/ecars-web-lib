import {cleanup, render, screen} from '@testing-library/react';
import {SliderNavigate} from '@/components/SliderNavigate/SliderNavigate';
import {
  NAVIGATE_BUTTON_PLACEMENT,
  NAVIGATE_BUTTON_TEST_ID,
  SLIDER_NAVIGATE_TEST_ID,
} from '@/components/SliderNavigate/constants';
import {NavigateButton} from '@/components/SliderNavigate/NavigateButton';

describe('Slider Navigate component', () => {
  afterEach(cleanup);
  test('renders correctly', () => {
    const {container} = render(<SliderNavigate />);
    const sliderNavigateElement = screen.getByTestId(SLIDER_NAVIGATE_TEST_ID);
    const buttonElements = screen.getAllByTestId(NAVIGATE_BUTTON_TEST_ID);
    expect(buttonElements.length).toBe(Object.values(NAVIGATE_BUTTON_PLACEMENT).length);
    expect(sliderNavigateElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('renders no buttons if NAVIGATE_BUTTON_PLACEMENT is empty', () => {
    jest.spyOn(Object, 'values').mockReturnValue([]);
    const {container} = render(<SliderNavigate />);
    const buttonElements = screen.queryAllByTestId(NAVIGATE_BUTTON_TEST_ID);

    expect(buttonElements.length).toBe(0);
    expect(container).toMatchSnapshot();
  });
});

describe('Navigate Button component', () => {
  const placements = Object.values(NAVIGATE_BUTTON_PLACEMENT);
  placements.forEach((placement) => {
    test(`renders correctly with ${placement} placement`, () => {
      const {container} = render(<NavigateButton placement={placement} />);
      const buttonElement = screen.getByTestId(NAVIGATE_BUTTON_TEST_ID);

      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass('slider-navigate__button');
      expect(buttonElement.querySelector('svg')).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });
});
