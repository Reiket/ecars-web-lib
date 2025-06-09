import type {FC} from 'react';
import type {SliderProps} from 'rc-slider';
import Slider from 'rc-slider';

export const RangeSlider: FC<SliderProps> = (props) => {
  return (
    <Slider
      {...props}
      range
    />
  );
};
