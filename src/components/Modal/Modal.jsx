import { Overlay, ModalContainer } from './Modal.styled';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscButtonPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscButtonPress);
  }

  handleEscButtonPress = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  findImage = () => {
    const { images, id } = this.props;
    if (id) {
      return images.find(image => image.id === id);
    }
  };

  render() {
    const findImage = this.findImage();

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContainer>
          <img src={findImage.largeImageURL} alt={findImage.tags} />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  images: PropTypes.array,
  id: PropTypes.number,
  onclose: PropTypes.func.isRequired,
};

export default Modal;
