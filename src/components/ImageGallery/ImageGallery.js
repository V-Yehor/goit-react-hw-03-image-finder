import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ findedImages }) => {
  return (
    <>
      <ul>
        <ImageGalleryItem images={findedImages} />
      </ul>
    </>
  );
};
