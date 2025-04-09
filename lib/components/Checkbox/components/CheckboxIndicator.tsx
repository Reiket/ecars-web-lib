import {Icons} from '@/services/icons';
import type {FC} from 'react';

export const CheckboxIndicator: FC = () => {
  return (
    <span className="checkbox__indicator">
      <Icons.Check />
    </span>
  );
};
