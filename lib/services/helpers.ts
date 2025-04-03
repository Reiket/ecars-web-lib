import {ClassValue, clsx} from 'clsx';

export const cn = (blockName = '', elementName: string, ...inputs: ClassValue[]) => {
  const className = blockName ? `${blockName}__${elementName} ${elementName}` : elementName;
  return clsx(className, inputs);
};
