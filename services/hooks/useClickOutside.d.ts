import { MutableRefObject } from 'react';
type OutsideElementType = HTMLDivElement | null;
type CallbackFunction = (b: boolean) => void;
export declare const useClickOutside: (callback: CallbackFunction) => MutableRefObject<OutsideElementType>;
export {};
