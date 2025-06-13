import type {FC, ReactNode} from 'react';

import {Swiper} from 'swiper/react';
import type {SwiperModule} from 'swiper/types/shared';
import {SLIDER_TEST_ID} from '@/components/Slider/constants';

interface BreakpointSettings {
  slidesPerView: number;
  spaceBetween: number;
}

interface Props {
  children: ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  breakpoints?: Record<number, BreakpointSettings>;
  modules?: SwiperModule[];
}

export const SliderComponent: FC<Props> = ({spaceBetween, slidesPerView, breakpoints, modules, children}) => (
  <Swiper
    data-testid={SLIDER_TEST_ID}
    modules={modules}
    spaceBetween={spaceBetween}
    slidesPerView={slidesPerView}
    breakpoints={breakpoints}
  >
    {children}
  </Swiper>
);
