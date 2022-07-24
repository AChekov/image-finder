import { PropTypes } from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ImageGalleryList>
      {images &&
        images.map(({ id, webformatURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              tags={tags}
              onClick={onClick}
            />
          );
        })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
