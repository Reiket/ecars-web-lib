import {fireEvent, render, screen} from '@testing-library/react';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import {ButtonCopy} from './ButtonCopy';
import {useCopy} from '@/services/hooks/useCopy';

vi.mock('@/services/hooks/useCopy', () => ({
  useCopy: vi.fn(),
}));

const mockUseCopy = vi.mocked(useCopy);
const mockCopy = vi.fn();

const DEFAULT_PROPS = {
  text: 'Share',
  copyHref: 'https://test.com',
};

describe('ButtonCopy Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseCopy.mockReturnValue({
      isCopied: false,
      copy: mockCopy,
    });
  });

  test('renders with initial text and calls copy function on click', () => {
    const {container} = render(<ButtonCopy {...DEFAULT_PROPS} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();

    fireEvent.click(button);

    expect(mockCopy).toHaveBeenCalledWith(DEFAULT_PROPS.copyHref);
    expect(container).toMatchSnapshot();
  });

  test('renders "Copied!" text and is disabled when isCopied is true', () => {
    mockUseCopy.mockReturnValue({
      isCopied: true,
      copy: mockCopy,
    });

    const {container} = render(<ButtonCopy {...DEFAULT_PROPS} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(screen.queryByText(DEFAULT_PROPS.text)).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
