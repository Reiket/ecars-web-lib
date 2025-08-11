import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {FAV_BUTTON_TEST_ID, FAV_BUTTON_TYPE} from '@/components/FavButton/constants';
import {FavButton} from '@/components/FavButton/FavButton';

describe('Fav Button component', () => {
  afterEach(cleanup);

  const types = Object.values(FAV_BUTTON_TYPE);
  const disabledOptions = [true, false];

  types.forEach((type) => {
    disabledOptions.forEach((disabled) => {
      const testName = `renders button with type ${type} and disabled`;
      test(testName, () => {
        const {container} = render(
          <FavButton
            type={type}
            disabled={disabled}
          />,
        );
        const favButtonElement: HTMLButtonElement = screen.getByTestId(FAV_BUTTON_TEST_ID);
        expect(favButtonElement).toBeInTheDocument();
        expect(favButtonElement).toHaveClass(`favorite-button--${type}`);
        expect(favButtonElement.disabled).toBe(disabled);
        expect(favButtonElement).toHaveStyle('cursor: default');
        expect(container).toMatchSnapshot();
      });
    });
  });

  test('handles the click event', () => {
    const onClick = vi.fn();
    const {container} = render(
      <FavButton
        type="circle"
        onClick={onClick}
      />,
    );
    fireEvent.click(screen.getByTestId(FAV_BUTTON_TEST_ID));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });

  test('the onClick event does not fire when button is disabled', () => {
    const onClick = vi.fn();
    const {container} = render(
      <FavButton
        type="circle"
        disabled
        onClick={onClick}
      />,
    );
    fireEvent.click(screen.getByTestId(FAV_BUTTON_TEST_ID));
    expect(onClick).not.toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });

  test('the active state when has prop isFavorite', () => {
    const onClick = vi.fn();
    const {container} = render(
      <FavButton
        type="circle"
        isFavorite
        disabled
        onClick={onClick}
      />,
    );
    expect(screen.getByTestId(FAV_BUTTON_TEST_ID)).toHaveClass('active');
    expect(container).toMatchSnapshot();
  });

  test('renders correct icon based on isFavorite prop', () => {
    const {rerender} = render(
      <FavButton
        type="circle"
        isFavorite
      />,
    );
    expect(screen.getByTestId(FAV_BUTTON_TEST_ID)).toContainHTML('<svg');

    rerender(
      <FavButton
        type="circle"
        isFavorite={false}
      />,
    );
    expect(screen.getByTestId(FAV_BUTTON_TEST_ID)).toContainHTML('<svg');
  });
});
