import {cleanup, render, screen} from '@testing-library/react';
import {BUTTON_COLOR, BUTTON_SIZE} from '@/components/Button/constants';
import {ButtonWithIcon} from '@/components/ButtonWithIcon/ButtonWithIcon';
import {Icons} from '@/services/icons';
import '@testing-library/jest-dom';
import {LEFT_ICON_BUTTON_TEST_ID, RIGHT_ICON_BUTTON_TEST_ID} from '@/components/ButtonWithIcon/constants';

describe('ButtonWithIcon component', () => {
  afterEach(cleanup);
  const props = {
    color: BUTTON_COLOR.GRAY,
    size: BUTTON_SIZE.BIG,
  };
  test('renders component correctly', () => {
    const {container} = render(<ButtonWithIcon {...props}>Click me</ButtonWithIcon>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('renders LeftIcon when provided', () => {
    const {container} = render(
      <ButtonWithIcon
        LeftIcon={Icons.ArrowNarrowLeft}
        {...props}
      >
        Click
      </ButtonWithIcon>,
    );
    expect(screen.getByTestId(LEFT_ICON_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('renders RightIcon when provided', () => {
    const {container} = render(
      <ButtonWithIcon
        RightIcon={Icons.ArrowNarrowRight}
        {...props}
      >
        Click
      </ButtonWithIcon>,
    );
    expect(screen.getByTestId(RIGHT_ICON_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('renders both LeftIcon and RightIcon when provided', () => {
    const {container} = render(
      <ButtonWithIcon
        LeftIcon={Icons.ArrowNarrowLeft}
        RightIcon={Icons.ArrowNarrowRight}
        {...props}
      >
        Click
      </ButtonWithIcon>,
    );
    expect(screen.getByTestId(LEFT_ICON_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(RIGHT_ICON_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
