import {SliderComponent} from '@/components/Slider/SliderComponent';
import {SwiperSlide} from 'swiper/react';

export const Slider = Object.assign(SliderComponent, {
  Slide: SwiperSlide,
});

export const SLIDER_TEST_ID = 'sliderTestId';
