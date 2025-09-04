import {fireEvent, render, screen} from '@testing-library/react';
import {dropdownOptionsMock} from '@/services/mocks';
import {DROPDOWN_TEST_ID, DROPDOWN_THEME} from '@/components/Dropdown/constants';
import {Dropdown} from '@/components/Dropdown';

const defaultProps = {
  options: dropdownOptionsMock,
  onSelect: vi.fn(),
  handleOpen: vi.fn(),
  isOpen: false,
  onClickOutside: vi.fn(),
  selectedOption: {
    name: 'Option 1',
    value: '1',
  },
  theme: DROPDOWN_THEME.LIGHT,
};

describe('Dropdown Component', () => {
  const dropdownThemes = Object.values(DROPDOWN_THEME);
  dropdownThemes.forEach((theme) => {
    test(`renders the dropdown component correctly in ${theme} theme`, () => {
      const {container} = render(
        <Dropdown
          {...defaultProps}
          theme={theme}
        />,
      );
      const dropdownElement = screen.getByTestId(DROPDOWN_TEST_ID);
      expect(dropdownElement).toBeInTheDocument();
      expect(dropdownElement).toHaveClass(`dropdown-menu--${theme}`);
      expect(container).toMatchSnapshot();
    });
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
    const selectedOption = dropdownOptionsMock[0];
    const {container} = render(
      <Dropdown
        {...defaultProps}
        selectedOption={selectedOption}
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
    const mockOption = dropdownOptionsMock[0];
    const firstMockOption = options.at(0);
    if (firstMockOption) {
      fireEvent.click(firstMockOption);
    }
    expect(defaultProps.onSelect).toHaveBeenCalledWith(mockOption);
  });
});
