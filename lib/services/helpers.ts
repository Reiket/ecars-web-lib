import type {ClassValue} from 'clsx';
import {clsx} from 'clsx';

export const cn = (blockName = '', elementName: string, ...inputs: ClassValue[]): string => {
  const className = blockName ? `${blockName}__${elementName} ${elementName}` : elementName;
  return clsx(className, inputs);
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
