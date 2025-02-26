import type {ButtonHTMLAttributes} from 'react';

export const BUTTON_SIZE = Object.freeze({
  BIG: 'big',
  SMALL: 'small',
});

export const BUTTON_COLOR = Object.freeze({
  GREEN: 'green',
  WHITE: 'white',
  GRAY: 'gray',
});


export type ButtonAttributesType = ButtonHTMLAttributes<HTMLButtonElement>['type']
export type ButtonSizeType = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
export type ButtonColorType = (typeof BUTTON_COLOR)[keyof typeof BUTTON_COLOR];

export const BUTTON_TEST_ID = 'buttonTestId';