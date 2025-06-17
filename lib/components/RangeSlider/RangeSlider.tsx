import type {FC} from 'react';
import type {SliderProps} from 'rc-slider';
import Slider from 'rc-slider';
import type {ElementProps} from '@/services/types';
import {cn} from '@/services/helpers';

interface Props extends SliderProps, ElementProps {}

export const RangeSlider: FC<Props> = ({block, ...props}) => (
  <Slider
    className={cn(block, 'range-slider')}
    {...props}
    range
  />
);
