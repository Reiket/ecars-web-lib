import { FC, ReactNode } from 'react';
import { SwiperModule } from 'swiper/types/shared';
import { ElementProps } from '../../services/types';
interface BreakpointSettings {
    slidesPerView: number;
    spaceBetween: number;
}
interface Props extends ElementProps {
    children: ReactNode;
    spaceBetween?: number;
    slidesPerView?: number;
    breakpoints?: Record<number, BreakpointSettings>;
    modules?: SwiperModule[];
}
export declare const SliderComponent: FC<Props>;
export {};
