import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {ROUTER_LINK_COLOR, ROUTER_LINK_SIZE, ROUTER_LINK_TEST_ID} from '@/components/RouterLink/constants';
import {RouterLink} from '@/components/RouterLink/RouterLink';
import {MemoryRouter} from 'react-router';

describe('Router Link component', () => {
  afterEach(cleanup);

  const colors = Object.values(ROUTER_LINK_COLOR);
  const sizes = Object.values(ROUTER_LINK_SIZE);
  const props = {
    color: ROUTER_LINK_COLOR.GRAY,
    size: ROUTER_LINK_SIZE.BOLD,
  };
  colors.forEach((color) => {
    sizes.forEach((size) => {
      const testName = `renders links with colors ${color} and sizes ${size}`;
      test(testName, () => {
        const {container} = render(
          <RouterLink
            href="/"
            color={color}
            size={size}
          >
            Link
          </RouterLink>,
        );
        const routerLinkElement = screen.getByTestId(ROUTER_LINK_TEST_ID);

        expect(routerLinkElement).toBeInTheDocument();
        expect(routerLinkElement).toHaveClass(`link-${color}`);
        expect(routerLinkElement).toHaveClass(`link-${size}`);
        expect(container).toMatchSnapshot();
      });
    });
  });

  test('applies "link-icon" class when withIcon is true', () => {
    const {container} = render(
      <RouterLink
        href="/"
        withIcon
        {...props}
      >
        Link with Icon
      </RouterLink>,
    );
    const routerLinkElement = screen.getByTestId(ROUTER_LINK_TEST_ID);

    expect(routerLinkElement).toHaveClass('link-icon');
    expect(container).toMatchSnapshot();
  });
  test('renders an external link when "href" is provided', () => {
    const {container} = render(
      <RouterLink
        href="https://example.com"
        {...props}
      >
        External Link
      </RouterLink>,
    );
    const routerLinkElement = screen.getByTestId(ROUTER_LINK_TEST_ID);

    expect(routerLinkElement).toBeInTheDocument();
    expect(routerLinkElement).toHaveAttribute('href', 'https://example.com');
    expect(routerLinkElement).toHaveAttribute('target', '_blank');
    expect(routerLinkElement).toHaveAttribute('rel', 'noopener noreferrer');
    expect(container).toMatchSnapshot();
  });
  test('renders an internal link when "to" is provided', () => {
    const {container} = render(
      <MemoryRouter>
        <RouterLink
          to="/internal"
          {...props}
        >
          Internal Link
        </RouterLink>
        ,
      </MemoryRouter>,
    );
    const routerLinkElement = screen.getByTestId(ROUTER_LINK_TEST_ID);
    expect(routerLinkElement).toBeInTheDocument();
    expect(routerLinkElement).toHaveAttribute('href', '/internal');
    expect(container).toMatchSnapshot();
  });
});
