import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import { PropTypes } from 'prop-types';

const ImageGalleryItem = ({ image: { webformatURL, tags, id }, onClick }) => {
  return (
    <GalleryItem onClick={onClick} data-id={id}>
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes,
  tags: PropTypes.array,
  id: PropTypes.number,
  setModalImgInfo: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
