import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import { PropTypes } from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
  id,
}) => {
  return (
    <GalleryItem onClick={onClick}>
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
