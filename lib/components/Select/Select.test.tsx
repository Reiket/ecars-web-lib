import {fireEvent, render, screen} from '@testing-library/react';
import {Select, SELECT_TEST_ID} from '@/components/Select/constants';
import {INPUT_TEST_ID} from '@/components/Input/constants';
import {selectOptionsMock} from '@/services/mocks';

const defaultProps = {
  options: selectOptionsMock,
  onClick: jest.fn(),
  handleSelect: jest.fn(),
  onClickToOptions: jest.fn(),
  onChange: jest.fn(),
  value: '',
  isOpen: true,
};

const selectOption = selectOptionsMock[0];
const optionSelector = '.select__option';
const notFoundOptionSelector = '.select__option_empty';

describe('Select Component', () => {
  const disabledOptions = [true, false];
  const placeholderOptions = ['Select', undefined];
  disabledOptions.forEach((disabled) => {
    placeholderOptions.forEach((placeholder) => {
      const disabledStatus = disabled ? 'is disabled' : 'is not disabled';
      const hasPlaceholder = placeholder ? 'has a placeholder' : 'has no placeholder';
      const testName = `should input ${disabledStatus} ${hasPlaceholder}`;
      test(testName, () => {
        const {container} = render(
          <Select
            {...defaultProps}
            disabled={disabled}
            placeholder={placeholder}
          />,
        );
        const selectElement = screen.getByTestId(SELECT_TEST_ID);
        const inputElement: HTMLInputElement = screen.getByTestId(INPUT_TEST_ID);
        if (placeholder) {
          expect(inputElement).toHaveAttribute('placeholder', placeholder);
        }
        expect(selectElement).toBeInTheDocument();
        expect(inputElement.disabled).toBe(disabled);
        if (disabled) {
          expect(selectElement).toHaveClass('disabled');
        }
        expect(container).toMatchSnapshot();
      });
    });
  });
  test('calls onChange and handleSelect when input changes', () => {
    const {container} = render(
      <Select
        {...defaultProps}
        hasSearch
      />,
    );
    const input = screen.getByTestId(INPUT_TEST_ID);
    fireEvent.change(input, {target: {value: selectOption}});
    expect(defaultProps.onChange).toHaveBeenCalledWith(selectOption);
    expect(defaultProps.handleSelect).toHaveBeenCalledWith(true);
    expect(container).toMatchSnapshot();
  });
  test('calls onClick when block is clicked', () => {
    const {container} = render(<Select {...defaultProps} />);
    const selectElement = screen.getByTestId(SELECT_TEST_ID);
    const block = selectElement.querySelector('.select__block');
    if (block) {
      fireEvent.click(block);
    }
    expect(selectElement).toHaveClass('_open');
    expect(defaultProps.onClick).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });
  test('filters options when hasSearch is true and value is typed', () => {
    render(
      <Select
        {...defaultProps}
        hasSearch
        value="Opt"
      />,
    );
    const options = screen.getByTestId(SELECT_TEST_ID).querySelectorAll(optionSelector);
    expect(options.length).toBe(1);
    expect(options[0].textContent).toBe(selectOption);
  });
  test('does not render list if search yields no match', () => {
    const {container} = render(
      <Select
        {...defaultProps}
        hasSearch
        value="nonexistent"
      />,
    );
    const options = screen.getByTestId(SELECT_TEST_ID).querySelectorAll(optionSelector);
    const nullOptionsFound = screen.getByTestId(SELECT_TEST_ID).querySelector(notFoundOptionSelector);

    expect(options.length).toBe(1);
    expect(nullOptionsFound).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('closes list on outside click', () => {
    render(<Select {...defaultProps} />);
    fireEvent.mouseDown(document);
    expect(defaultProps.handleSelect).toHaveBeenCalled();
  });
  test('displays the provided value in the input and highlights the corresponding option', () => {
    const {container} = render(
      <Select
        {...defaultProps}
        value={selectOption}
      />,
    );
    const input = screen.getByTestId(INPUT_TEST_ID);
    const options = Array.from(screen.getByTestId(SELECT_TEST_ID).querySelectorAll(optionSelector));
    const activeOption = options.find((option) => option.textContent === selectOption);
    expect(input).toHaveValue(selectOption);
    expect(activeOption).toHaveClass('_selected');
    expect(container).toMatchSnapshot();
  });
  test('opens the select when typing in the input', () => {
    const {container} = render(
      <Select
        {...defaultProps}
        hasSearch
      />,
    );
    const input = screen.getByTestId(INPUT_TEST_ID);

    fireEvent.change(input, {target: {value: selectOption}});
    expect(defaultProps.isOpen).toBe(true);
    expect(container).toMatchSnapshot();
  });
});
