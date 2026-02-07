import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, test, vi} from 'vitest';
import {ButtonCategory} from '@/components/ButtonCategory/ButtonCategory';
import {BUTTON_CATEGORY_TEST_ID} from '@/components/ButtonCategory/constants';

const defaultProps = {
  isActive: false,
  onClick: vi.fn(),
};

describe('ButtonCategory Component', () => {
  const isActiveOptions = [true, false];
  isActiveOptions.forEach((isActive) => {
    test(`renders correctly when isActive is ${String(isActive)}`, () => {
      const {container} = render(
        <ButtonCategory
          {...defaultProps}
          isActive={isActive}
        >
          button
        </ButtonCategory>,
      );
      const button = screen.getByTestId(BUTTON_CATEGORY_TEST_ID);
      expect(button).toBeInTheDocument();
      if (isActive) {
        expect(button).toHaveClass('_active');
      } else {
        expect(button).not.toHaveClass('_active');
      }
      expect(container).toMatchSnapshot();
    });
  });

  test('should handle click events', () => {
    const onClick = vi.fn();
    render(
      <ButtonCategory
        {...defaultProps}
        onClick={onClick}
      >
        button
      </ButtonCategory>,
    );

    const button = screen.getByTestId(BUTTON_CATEGORY_TEST_ID);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
