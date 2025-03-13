import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {LinkWithIcon} from '@/components/LinkWithIcon/LinkWithIcon';
import {ROUTER_LINK_COLOR, ROUTER_LINK_SIZE} from '@/components/RouterLink/constants';
import {Icons} from '@/services/icons';
import {LEFT_ICON_LINK_TEST_ID, RIGHT_ICON_LINK_TEST_ID} from '@/components/LinkWithIcon/constants';

describe('LinkWithIcon component', () => {
  afterEach(cleanup);
  const props = {
    color: ROUTER_LINK_COLOR.GRAY,
    size: ROUTER_LINK_SIZE.BOLD,
    href: "/"
  };
  test('renders component correctly', () => {
    const {container} = render(<LinkWithIcon {...props}>Link</LinkWithIcon>);
    expect(screen.getByText('Link')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('renders LeftIcon when provided', () => {
    const {container} = render(
      <LinkWithIcon
        LeftIcon={Icons.ArrowNarrowLeft}
        {...props}
      >
        Click
      </LinkWithIcon>,
    );
    expect(screen.getByTestId(LEFT_ICON_LINK_TEST_ID)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('renders RightIcon when provided', () => {
    const {container} = render(
      <LinkWithIcon
        RightIcon={Icons.ArrowNarrowRight}
        {...props}
      >
        Click
      </LinkWithIcon>,
    );
    expect(screen.getByTestId(RIGHT_ICON_LINK_TEST_ID)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('renders both LeftIcon and RightIcon when provided', () => {
    const {container} = render(
      <LinkWithIcon
        LeftIcon={Icons.ArrowNarrowLeft}
        RightIcon={Icons.ArrowNarrowRight}
        {...props}
      >
        Click
      </LinkWithIcon>,
    );
    expect(screen.getByTestId(LEFT_ICON_LINK_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(RIGHT_ICON_LINK_TEST_ID)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});