import {fireEvent, render, screen} from '@testing-library/react';
import {PasswordInput} from '@/components/PasswordInput/index';
import {INPUT_TEST_ID} from '@/components/Input/constants';
import {BUTTON_TEST_ID} from '@/components/Button/constants';

describe('PasswordInput Component', () => {
  test('renders component correctly', () => {
    const {container} = render(<PasswordInput />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
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
