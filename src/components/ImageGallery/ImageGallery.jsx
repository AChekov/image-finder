import { PropTypes } from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  <ImageGalleryList>
    {images &&
      images.map(image => {
        return (
          <ImageGalleryItem key={image.id} image={image} onClick={openModal} />
        );
      })}
  </ImageGalleryList>;
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
