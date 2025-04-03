import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {BUTTON_COLOR, BUTTON_SIZE, BUTTON_TEST_ID, ButtonAttributesType} from '@/components/Button/constants';
import {Button} from '@/components/Button/Button';
import '@testing-library/jest-dom';

describe('Button component', () => {
  afterEach(cleanup);

  const colors = Object.values(BUTTON_COLOR);
  const sizes = Object.values(BUTTON_SIZE);
  const types: ButtonAttributesType[] = ['submit', 'reset', 'button'];
  const props = {
    color: BUTTON_COLOR.GRAY,
    size: BUTTON_SIZE.BIG,
  };
  const disabledOptions = [true, false];
  colors.forEach((color) => {
    sizes.forEach((size) => {
      types.forEach((type) => {
        disabledOptions.forEach((disabled) => {
          const testName = `renders button with color ${color}, size ${size}, type ${type || 'button'} and disabled`;
          test(testName, () => {
            const {container} = render(
              <Button
                color={color}
                size={size}
                type={type}
                disabled={disabled}
              >
                button
              </Button>,
            );
            const buttonElement = screen.getByTestId(BUTTON_TEST_ID) as HTMLButtonElement;
            expect(buttonElement).toBeInTheDocument();
            expect(buttonElement).toHaveClass(`button--${color}`);
            expect(buttonElement).toHaveClass(`button--${size}`);
            expect(buttonElement.disabled).toBe(disabled);
            expect(buttonElement).toHaveStyle('cursor: default');
            expect(container).toMatchSnapshot();
          });
        });
      });
    });
  });
  test('changes button text according to the children text', () => {
    const {container, getByText, rerender} = render(<Button {...props}>button</Button>);
    let button = getByText('button');
    expect(button).toBeInTheDocument();

    rerender(<Button {...props}>Confirm</Button>);
    button = getByText('Confirm');
    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('handles the click event', () => {
    const onClick = jest.fn();
    const {container, getByText} = render(
      <Button
        {...props}
        onClick={() => onClick()}
      >
        button
      </Button>,
    );
    fireEvent.click(getByText('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });

  test('the onClick event does not fire when button is disabled', () => {
    const onClick = jest.fn();
    const {container, getByText} = render(
      <Button
        {...props}
        disabled
        onClick={onClick}
      >
        button
      </Button>,
    );
    const button = getByText('button');
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });

  test('additional classes are not applied if the button is disabled', () => {
    const {container, getByText} = render(
      <Button
        {...props}
        disabled
      >
        button
      </Button>,
    );
    const button = getByText('button');
    expect(button).toHaveClass('button');
    expect(container).toMatchSnapshot();
  });
  test('button has button-transparent if receive prop isTransparent', () => {
    const {container} = render(
      <Button
        {...props}
        isTransparent
      >
        button
      </Button>,
    );
    const button = screen.getByTestId(BUTTON_TEST_ID);
    expect(button).toHaveClass('button--transparent');
    expect(container).toMatchSnapshot();
  });
  test('button has button-icon if receive prop withIcon', () => {
    const {container} = render(
      <Button
        {...props}
        withIcon
      >
        button
      </Button>,
    );
    const button = screen.getByTestId(BUTTON_TEST_ID);
    expect(button).toHaveClass('button--icon');
    expect(container).toMatchSnapshot();
  });
});
