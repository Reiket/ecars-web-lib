import {Loader} from '@/components/Loader/Loader';
import {render} from '@testing-library/react';

describe('Loader Component', () => {
  test('render component correctly', () => {
    const {container} = render(<Loader />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
