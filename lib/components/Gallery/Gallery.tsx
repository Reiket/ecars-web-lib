import type {FC} from 'react';
import type {ReactImageGalleryItem} from 'react-image-gallery';
import ImageGallery from 'react-image-gallery';
import type {ElementProps} from '@/services/types';

interface Props extends ElementProps {
  images: ReactImageGalleryItem[];
}

export const Gallery: FC<Props> = ({images, block}) => {
  return (
    <ImageGallery
      items={images}
      additionalClass={block}
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
};
