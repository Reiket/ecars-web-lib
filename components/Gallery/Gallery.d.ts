import { FC } from 'react';
import { ReactImageGalleryItem } from 'react-image-gallery';
import { ElementProps } from '../../services/types';
interface Props extends ElementProps {
    images: ReactImageGalleryItem[];
}
export declare const Gallery: FC<Props>;
export {};
