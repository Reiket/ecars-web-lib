import {Logo} from '@/components/Logo/Logo';
import {render, screen} from '@testing-library/react';

describe('Logo Component', () => {
  test('render components correctly with src attr', () => {
    const mockSrc = 'https://example.com/logo.png';
    const {container} = render(<Logo src={mockSrc} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', mockSrc);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
