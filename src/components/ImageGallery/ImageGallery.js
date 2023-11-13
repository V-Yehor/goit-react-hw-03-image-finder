import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
export const ImageGallery = ({ findedImages }) => {
  return (
    <>
      <List>
        {findedImages.map(findedImage => {
          return (
            <ImageGalleryItem key={findedImage.id} imageItem={findedImage} />
          );
        })}
      </List>
    </>
  );
};
