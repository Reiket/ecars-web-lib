import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Gallery} from './Gallery';
import type {ReactImageGalleryItem} from 'react-image-gallery';
import {imagesMock} from '@/services/mocks';
import {GALLERY_TEST_ID} from '@/components/Gallery/constants';

jest.mock('react-image-gallery', () => {
  return ({items}: {items: ReactImageGalleryItem[]}) => (
    <div data-testid={GALLERY_TEST_ID}>
      {items.map((item, index) => (
        <img
          key={index}
          src={item.original}
          alt="image-gallery"
        />
      ))}
    </div>
  );
});

describe('Gallery component', () => {
  test('renders Gallery component', () => {
    const {container} = render(<Gallery images={imagesMock} />);
    const galleryElement = screen.getByTestId(GALLERY_TEST_ID);
    expect(galleryElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('renders all mock images', () => {
    render(<Gallery images={imagesMock} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(imagesMock.length);
  });
});
