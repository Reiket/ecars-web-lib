import type {FC} from 'react';
import {cn} from '@/services/helpers';
import type {ElementProps} from '@/services/types';

interface Props extends ElementProps {
  src: string;
}

export const Logo: FC<Props> = ({src, block}) => (
  <a className={cn(block, 'logo')}>
    <img
      src={src}
      alt="Logo"
    />
  </a>
);
