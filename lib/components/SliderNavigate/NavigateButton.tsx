import type {FC} from 'react';
import React from 'react';
import type {NavigateButtonPlacement} from '@/components/SliderNavigate/constants';
import {NAVIGATE_BUTTON_TEST_ID} from '@/components/SliderNavigate/constants';
import {Icons} from '@/services/icons';

interface Props {
  placement: NavigateButtonPlacement;
}

const icons = {
  left: <Icons.ArrowNarrowLeft />,
  right: <Icons.ArrowNarrowRight />,
};

export const NavigateButton: FC<Props> = ({placement}) => {
  return (
    <button
      data-testid={NAVIGATE_BUTTON_TEST_ID}
      type="button"
      className="slider-navigate__button"
    >
      {icons[placement]}
    </button>
  );
};
