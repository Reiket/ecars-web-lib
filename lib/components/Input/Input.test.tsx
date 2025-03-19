import {fireEvent, render, screen} from '@testing-library/react';
import {Input} from '@/components/Input/Input';
import '@testing-library/jest-dom';
import {INPUT_TEST_ID} from '@/components/Input/constants';

describe('Input component', () => {
  const disabledOptions = [true, false];
  const errorsOptions = [true, false];
  const placeholderOptions = ['Your email', undefined];
  disabledOptions.forEach((disabled) => {
    errorsOptions.forEach((error) => {
      placeholderOptions.forEach((placeholder) => {
        const disabledStatus = disabled ? 'is disabled' : 'is not disabled';
        const hasError = error ? 'has an error and input has an error class' : 'has no error';
        const hasPlaceholder = placeholder ? 'has a placeholder' : 'has no placeholder';
        const testName = `should input ${disabledStatus} ${hasError} ${hasPlaceholder}`;
        test(testName, () => {
          const props = {
            disabled: disabled,
            hasError: error,
            placeholder: placeholder,
          };
          const {container} = render(<Input {...props} />);
          const inputElement = screen.getByTestId(INPUT_TEST_ID) as HTMLInputElement;
          if (error) {
            expect(inputElement).toHaveClass('error');
          }
          if (placeholder) {
            expect(inputElement).toHaveAttribute('placeholder', placeholder);
          }
          expect(inputElement).toBeInTheDocument();
          expect(inputElement.disabled).toBe(disabled);
          expect(container).toMatchSnapshot();
        });
      });
    });
  });
  test('should input has a value which got in props', () => {
    const props = {
      value: 'input text',
    };
    render(<Input {...props} />);
    const inputElement = screen.getByTestId(INPUT_TEST_ID);
    expect(inputElement).toHaveValue(props.value);
  });
  test('should onChange event updates value correctly', () => {
    const mockOnChange = jest.fn();
    const props = {
      value: '',
      onChange: mockOnChange,
    };
    render(<Input {...props} />);
    const inputElement = screen.getByTestId(INPUT_TEST_ID);
    fireEvent.change(inputElement, {target: {value: 'test'}});
    expect(mockOnChange).toHaveBeenCalledWith('test');
  });
  test('onChange event updates input value correctly when typing', () => {
    const mockOnChange = jest.fn();
    const props = {
      value: '',
      onChange: mockOnChange,
    };
    render(<Input {...props} />);
    const inputElement = screen.getByTestId(INPUT_TEST_ID);
    fireEvent.change(inputElement, {target: {value: 't'}});
    expect(mockOnChange).toHaveBeenCalledWith('t');
    fireEvent.change(inputElement, {target: {value: 'te'}});
    expect(mockOnChange).toHaveBeenCalledWith('te');
    fireEvent.change(inputElement, {target: {value: 'tes'}});
    expect(mockOnChange).toHaveBeenCalledWith('tes');
    fireEvent.change(inputElement, {target: {value: 'test'}});
    expect(mockOnChange).toHaveBeenCalledWith('test');
  });
});
