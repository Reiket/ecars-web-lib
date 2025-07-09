import {fireEvent, render, screen} from '@testing-library/react';
import {dropdownOptionsMock} from '@/services/mocks';
import {DROPDOWN_TEST_ID} from '@/components/Dropdown/constants';
import {Dropdown} from '@/components/Dropdown';

const defaultProps = {
  options: dropdownOptionsMock,
  onSelect: jest.fn(),
  handleOpen: jest.fn(),
  isOpen: false,
  onClickOutside: jest.fn(),
  category: '1',
};

describe('Dropdown Component', () => {
  test('renders the dropdown component correctly', () => {
    const {container} = render(<Dropdown {...defaultProps} />);
    const dropdownElement = screen.getByTestId(DROPDOWN_TEST_ID);
    expect(dropdownElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('calls handleOpen when block is clicked', () => {
    const {container} = render(
      <Dropdown
        {...defaultProps}
        isOpen
      />,
    );
    const dropdownElement = screen.getByTestId(DROPDOWN_TEST_ID);
    const block = dropdownElement.querySelector('.dropdown-menu__category');
    if (block) {
      fireEvent.click(block);
    }
    expect(dropdownElement).toHaveClass('_dropdown-active');
    expect(defaultProps.handleOpen).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });
  test('closes list on outside click', () => {
    render(<Dropdown {...defaultProps} />);
    fireEvent.mouseDown(document);
    expect(defaultProps.onClickOutside).toHaveBeenCalled();
  });
  test('highlights the selected option correctly', () => {
    const selectedCategory = dropdownOptionsMock[0].value;
    const {container} = render(
      <Dropdown
        {...defaultProps}
        category={selectedCategory}
        isOpen
      />,
    );
    const dropdownElement = screen.getByTestId(DROPDOWN_TEST_ID);
    const dropdownOptions = Array.from(dropdownElement.querySelectorAll('.dropdown-menu__option'));
    const activeOption = dropdownOptions.find((option) => option.classList.contains('_selected-option'));
    expect(activeOption).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('calls onSelect when an option is clicked', () => {
    render(
      <Dropdown
        {...defaultProps}
        isOpen
      />,
    );
    const dropdownElement = screen.getByTestId(DROPDOWN_TEST_ID);
    const options = Array.from(dropdownElement.querySelectorAll('.dropdown-menu__option'));
    const mockOptionValue = dropdownOptionsMock[0].value;
    const mockOption = options[0];
    fireEvent.click(mockOption);
    expect(defaultProps.onSelect).toHaveBeenCalledWith(mockOptionValue);
  });
});
