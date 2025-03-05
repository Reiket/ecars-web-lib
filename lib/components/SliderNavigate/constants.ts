export const NAVIGATE_BUTTON_PLACEMENT = Object.freeze({
  LEFT: 'left',
  RIGHT: 'right',
});

export type NavigateButtonPlacement = (typeof NAVIGATE_BUTTON_PLACEMENT)[keyof typeof NAVIGATE_BUTTON_PLACEMENT];

export const SLIDER_NAVIGATE_TEST_ID = 'sliderNavigateTestId';
export const NAVIGATE_BUTTON_TEST_ID = 'navigateButtonTestId';
