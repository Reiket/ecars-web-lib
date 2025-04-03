export const ROUTER_LINK_COLOR = Object.freeze({
  GREEN: 'green',
  GRAY: 'gray',
  DARK: 'dark',
  LIGHTGRAY: 'lightgray',
});

export const ROUTER_LINK_TEST_ID = 'routerLinkTestId';

export type RouterLinkColorType = (typeof ROUTER_LINK_COLOR)[keyof typeof ROUTER_LINK_COLOR];
