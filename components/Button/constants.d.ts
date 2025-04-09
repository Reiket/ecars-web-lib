import { ButtonHTMLAttributes } from 'react';
export declare const BUTTON_SIZE: Readonly<{
    BIG: "big";
    MEDIUM: "medium";
    SMALL: "small";
}>;
export declare const BUTTON_COLOR: Readonly<{
    GREEN: "green";
    WHITE: "white";
    GRAY: "gray";
}>;
export type ButtonAttributesType = ButtonHTMLAttributes<HTMLButtonElement>['type'];
export type ButtonSizeType = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
export type ButtonColorType = (typeof BUTTON_COLOR)[keyof typeof BUTTON_COLOR];
export declare const BUTTON_TEST_ID = "buttonTestId";
