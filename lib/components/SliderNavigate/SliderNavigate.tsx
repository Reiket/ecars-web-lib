import type {FC} from 'react';
import {NavigateButton} from '@/components/SliderNavigate/NavigateButton';
import {NAVIGATE_BUTTON_PLACEMENT, SLIDER_NAVIGATE_TEST_ID} from '@/components/SliderNavigate/constants';

export const SliderNavigate: FC = () => {
  return (
    <div
      data-testid={SLIDER_NAVIGATE_TEST_ID}
      className="slider-navigate"
    >
      {Object.values(NAVIGATE_BUTTON_PLACEMENT).map((placement) => (
        <NavigateButton
          key={placement}
          placement={placement}
        />
      ))}
    </div>
  );
};
