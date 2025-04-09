import type {ClassValue} from 'clsx';
import {clsx} from 'clsx';

export const cn = (blockName = '', elementName: string, ...inputs: ClassValue[]): string => {
  const className = blockName ? `${blockName}__${elementName} ${elementName}` : elementName;
  return clsx(className, inputs);
};
