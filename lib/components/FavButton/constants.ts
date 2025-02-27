export const FAV_BUTTON_TYPE = Object.freeze({
  TRANSPARENT: 'transparent',
  CIRCLE: 'circle',
});

export type FavButtonType = (typeof FAV_BUTTON_TYPE)[keyof typeof FAV_BUTTON_TYPE];

export const FAV_BUTTON_TEST_ID = 'favButtonTestId';