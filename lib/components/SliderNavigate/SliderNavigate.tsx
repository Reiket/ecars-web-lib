import {NavigateButton} from '@/components/SliderNavigate/components/NavigateButton';
import {NAVIGATE_BUTTON_PLACEMENT, SLIDER_NAVIGATE_TEST_ID} from '@/components/SliderNavigate/constants';
import type {FC} from 'react';
import type {ElementProps} from '@/services/types';
import {cn} from '@/services/helpers';

export const SliderNavigate: FC<ElementProps> = ({block}) => (
  <div
    data-testid={SLIDER_NAVIGATE_TEST_ID}
    className={cn(block, 'slider-navigate')}
  >
    {Object.values(NAVIGATE_BUTTON_PLACEMENT).map((placement) => (
      <NavigateButton
        key={placement}
        placement={placement}
      />
    ))}
  </div>
);
