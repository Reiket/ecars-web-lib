import {cleanup, render} from '@testing-library/react';
import {NavLink} from './NavLink';
import '@testing-library/jest-dom';
import {MemoryRouter, Route, Routes} from 'react-router';
import {MOCK_ROUTE_LINK} from '@/components/NavLink/constants';

describe('NavLink component', () => {
  afterEach(cleanup);
  test('renders correctly with given children', () => {
    const {container, getByText} = render(
      <MemoryRouter>
        <NavLink to="/test">Test Link</NavLink>
      </MemoryRouter>,
    );

    expect(getByText('Test Link')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("applies 'link-active' class when the link is active", () => {
    const {container, getByText} = render(
      <MemoryRouter initialEntries={[MOCK_ROUTE_LINK]}>
        <Routes>
          <Route
            path={MOCK_ROUTE_LINK}
            element={<NavLink to={MOCK_ROUTE_LINK}>Active Link</NavLink>}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(getByText('Active Link')).toHaveClass('_active');
    expect(container).toMatchSnapshot();
  });

  test("does not apply 'link-active' class when the link is not active", () => {
    const testRoute = '/other';
    const {container, getByText} = render(
      <MemoryRouter initialEntries={[testRoute]}>
        <NavLink to={MOCK_ROUTE_LINK}>Test Link</NavLink>
      </MemoryRouter>,
    );

    expect(getByText('Test Link')).not.toHaveClass('_active');
    expect(container).toMatchSnapshot();
  });
});
