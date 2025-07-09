import type {FC, ReactNode} from 'react';

import {Swiper} from 'swiper/react';
import type {SwiperModule} from 'swiper/types/shared';
import {SLIDER_TEST_ID} from '@/components/Slider/constants';
import {cn} from '@/services/helpers';
import type {ElementProps} from '@/services/types';

interface BreakpointSettings {
  slidesPerView: number;
  spaceBetween: number;
}

export interface Props extends ElementProps {
  children: ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  breakpoints?: Record<number, BreakpointSettings>;
  modules?: SwiperModule[];
}

export const SliderComponent: FC<Props> = ({spaceBetween, slidesPerView, block, breakpoints, modules, children}) => (
  <Swiper
    className={cn(block, 'slider')}
    data-testid={SLIDER_TEST_ID}
    modules={modules}
    spaceBetween={spaceBetween}
    slidesPerView={slidesPerView}
    breakpoints={breakpoints}
  >
    {children}
  </Swiper>
);
