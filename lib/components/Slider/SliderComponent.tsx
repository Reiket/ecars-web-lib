import type {FC, ReactNode} from 'react';

import type {SwiperProps} from 'swiper/react';
import {Swiper} from 'swiper/react';
import {SLIDER_TEST_ID} from '@/components/Slider/constants';
import {cn} from '@/services/helpers';
import type {ElementProps} from '@/services/types';

export interface Props extends ElementProps, SwiperProps {
  children: ReactNode;
}

export const SliderComponent: FC<Props> = ({children, block, ...rest}) => (
  <Swiper
    className={cn(block, 'slider')}
    data-testid={SLIDER_TEST_ID}
    {...rest}
  >
    {children}
  </Swiper>
);
