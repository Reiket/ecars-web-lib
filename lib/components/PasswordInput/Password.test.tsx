import {fireEvent, render, screen} from '@testing-library/react';
import {PasswordInput} from '@/components/PasswordInput/index';
import {INPUT_TEST_ID} from '@/components/Input/constants';
import {BUTTON_TEST_ID} from '@/components/Button/constants';
import {PASSWORD_INPUT_TEST_ID} from '@/components/PasswordInput/constants';

describe('PasswordInput Component', () => {
  const disabledOptions = [true, false];
  const hasErrorOptions = [true, false];

  disabledOptions.forEach((disabled) => {
    hasErrorOptions.forEach((error) => {
      const disabledStatus = disabled ? 'is disabled' : 'is not disabled';
      const errorStatus = error ? 'has error' : 'has not error';
      const testName = `should password input ${disabledStatus} ${errorStatus} and renders component correctly`;
      test(testName, () => {
        const {container} = render(
          <PasswordInput
            disabled={disabled}
            hasError={error}
          />,
        );
        const inputElement: HTMLInputElement = screen.getByTestId(INPUT_TEST_ID);
        const passwordInputElement = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
        expect(inputElement.disabled).toBe(disabled);
        if (disabled) {
          expect(passwordInputElement).toHaveClass('disabled');
        }
        if (error) {
          expect(passwordInputElement).toHaveClass('error');
        }
        expect(container).toBeInTheDocument();
        expect(container).toMatchSnapshot();
      });
    });
  });

  test('toggles input type on button click', () => {
    render(<PasswordInput />);
    const input = screen.getByTestId(INPUT_TEST_ID);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(input).toHaveAttribute('type', 'password');

    fireEvent.click(button);
    expect(input).toHaveAttribute('type', 'text');
  });
});
