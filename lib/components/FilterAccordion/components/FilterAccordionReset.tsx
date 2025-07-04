import type {FC} from 'react';
import {Button} from '@/components/Button/Button';
import type {ElementProps} from '@/services/types';

export const FilterAccordionReset: FC<ElementProps> = ({block}) => (
  <Button
    block={block}
    isTransparent
    size="small"
    color="gray"
  >
    Reset
  </Button>
);
