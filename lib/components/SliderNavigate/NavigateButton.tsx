import React, {FC} from 'react';
import {NAVIGATE_BUTTON_TEST_ID, NavigateButtonPlacement} from '@/components/SliderNavigate/constants';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md';

interface Props {
  placement: NavigateButtonPlacement;
}

const icons = {
  left: <MdOutlineKeyboardArrowLeft />,
  right: <MdOutlineKeyboardArrowRight />,
};

export const NavigateButton: FC<Props> = ({placement}) => {
  return (
    <button
      data-testid={NAVIGATE_BUTTON_TEST_ID}
      type="button"
      className="slider-navigate__button"
    >
      {icons[placement] || null}
    </button>
  );
};
