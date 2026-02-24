import type {FC} from 'react';
import {cn} from '@/services/helpers';
import type {ElementProps} from '@/services/types';
import {Icons} from '@/services/icons';

export const Loader: FC<ElementProps> = ({block}) => (
  <div className={cn(block, 'loader')}>
    <Icons.Loader />
  </div>
);
