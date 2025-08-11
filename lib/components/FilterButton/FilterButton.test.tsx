import {fireEvent, render, screen} from '@testing-library/react';
import {FilterButton} from './FilterButton';
import {RIGHT_ICON_BUTTON_TEST_ID} from '@/components/ButtonWithIcon/constants';

const defaultProps = {
  onClick: vi.fn(),
};

describe('FilterButton component', () => {
  test('renders the filter component correctly', () => {
    const {container} = render(<FilterButton {...defaultProps}>Close</FilterButton>);
    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('renders RightIcon component', () => {
    render(<FilterButton {...defaultProps}>Close</FilterButton>);
    expect(screen.getByTestId(RIGHT_ICON_BUTTON_TEST_ID)).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    render(<FilterButton {...defaultProps}>Close</FilterButton>);
    fireEvent.click(screen.getByRole('button'));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
