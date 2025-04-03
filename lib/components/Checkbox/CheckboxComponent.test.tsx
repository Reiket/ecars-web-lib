import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import {Checkbox, CHECKBOX_TEST_ID, CHECKBOX_TEST_INPUT_ID} from '@/components/Checkbox/constants';

describe('Checkbox component', () => {
  const disabledOptions = [true, false];
  const errorOptions = [true, false];
  const checkedOptions = [true, false];
  disabledOptions.forEach((disabled) => {
    checkedOptions.forEach((checked) => {
      errorOptions.forEach((error) => {
        const disabledStatus = disabled ? 'is disabled' : 'is not disabled';
        const checkedStatus = checked ? 'is checked' : 'is not checked';
        const errorStatus = error ? 'has an error and input has an error class' : 'has no error';
        const testName = `renders checkbox ${disabledStatus}, ${checkedStatus}, ${errorStatus}`;
        test(testName, () => {
          const props = {
            checked: checked,
            disabled: disabled,
            hasError: error,
          };
          const {container} = render(<Checkbox {...props} />);
          const checkboxElement = screen.getByTestId(CHECKBOX_TEST_ID);
          const inputElement = screen.getByTestId(CHECKBOX_TEST_INPUT_ID) as HTMLInputElement;

          if (error) {
            expect(inputElement).toHaveClass('error');
          }
          expect(inputElement.checked).toBe(checked);
          expect(inputElement.disabled).toBe(disabled);
          expect(checkboxElement).toBeInTheDocument();
          expect(container).toMatchSnapshot();
        });
      });
    });
  });
  test('onChange event changed checked when user clicks on checkbox', () => {
    const props = {
      checked: false,
      onChange: jest.fn(),
    };
    render(<Checkbox {...props} />);
    const inputElement = screen.getByTestId(CHECKBOX_TEST_INPUT_ID) as HTMLInputElement;
    expect(inputElement.checked).toBe(false);
    fireEvent.change(inputElement, {target: {checked: true}});
    expect(inputElement.checked).toBe(true);
  });
});
