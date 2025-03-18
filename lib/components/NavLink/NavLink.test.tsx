import {cleanup, render} from '@testing-library/react';
import {NavLink} from './NavLink';
import '@testing-library/jest-dom';
import {MemoryRouter, Route, Routes} from 'react-router';

describe('NavLink component', () => {
  afterEach(cleanup);
  test('renders correctly with given children', () => {
    const {container, getByText} = render(
      <MemoryRouter>
        <NavLink to="/test">Test Link</NavLink>
      </MemoryRouter>,
    );

    expect(getByText('Test Link')).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  });

  test("applies 'link-active' class when the link is active", () => {
    const {container, getByText} = render(
      <MemoryRouter initialEntries={['/active']}>
        <Routes>
          <Route
            path="/active"
            element={<NavLink to="/active">Active Link</NavLink>}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(getByText('Active Link')).toHaveClass('link-active');
    expect(container).toBeInTheDocument();
  });

  test("does not apply 'link-active' class when the link is not active", () => {
    const {container, getByText} = render(
      <MemoryRouter initialEntries={['/other']}>
        <NavLink to="/test">Test Link</NavLink>
      </MemoryRouter>,
    );

    expect(getByText('Test Link')).not.toHaveClass('link-active');
    expect(container).toBeInTheDocument();
  });
});
