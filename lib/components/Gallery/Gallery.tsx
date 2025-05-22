import type {FC} from 'react';
import type {ReactImageGalleryItem} from 'react-image-gallery';
import ImageGallery from 'react-image-gallery';

interface Props {
  images: ReactImageGalleryItem[];
}

export const Gallery: FC<Props> = ({images}) => {
  return (
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
};
