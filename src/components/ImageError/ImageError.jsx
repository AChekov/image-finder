import { PropTypes } from 'prop-types';
import { ImageErrorContainer } from './ImageError.styled';

const ImageError = ({ message }) => {
  return (
    <ImageErrorContainer role="alert">
      <p>{message}</p>
    </ImageErrorContainer>
  );
};

ImageError.propTypes = {
  message: PropTypes.string,
};

export default ImageError;
