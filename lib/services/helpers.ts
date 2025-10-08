import type {ClassValue} from 'clsx';
import {clsx} from 'clsx';
import {Icons} from '@/services/icons';
import type {ComponentType} from 'react';

export const cn = (blockName = '', elementName: string, ...inputs: ClassValue[]): string => {
  const className = blockName ? `${blockName}__${elementName} ${elementName}` : elementName;
  return clsx(className, inputs);
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

interface PasswordFieldPropsResult {
  inputType: string;
  ButtonIcon: ComponentType;
}

export const getPasswordFieldProps = (isVisible: boolean): PasswordFieldPropsResult => ({
  inputType: isVisible ? 'text' : 'password',
  ButtonIcon: isVisible ? Icons.OpenEye : Icons.CloseEye,
});
