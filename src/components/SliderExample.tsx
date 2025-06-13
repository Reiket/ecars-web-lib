import type {FC} from 'react';
import {sliderSlideArrayMock} from '@/services/mocks';
import {Slider} from '@/components/Slider/constants';

export const SliderExample: FC = () => (
  <Slider>
    {sliderSlideArrayMock.map((slide) => (
      <Slider.Slide key={slide}>{slide}</Slider.Slide>
    ))}
  </Slider>
);
