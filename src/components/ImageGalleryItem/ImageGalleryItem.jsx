import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import { PropTypes } from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, tags, onClick }) => {
  return (
    <GalleryItem onClick={onClick} data-id={id}>
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
