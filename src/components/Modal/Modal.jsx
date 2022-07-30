import { Overlay, ModalContainer } from './Modal.styled';
import { createPortal } from 'react-dom';
// import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, images, id }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  });

  const handleEscPress = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const findImage = () => {
    if (id) {
      return images.find(img => img.id === id);
    }
  };

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  const img = findImage();
  // console.log(img);
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <img src={img.largeImageURL} alt={img.tags} />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

// ================ CLASS ================

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleEscPress);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleEscPress);
//   }

//   handleEscPress = evt => {
//     if (evt.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   findImage = () => {
//     const { images, id } = this.props;
//     if (id) {
//       return images.find(img => img.id === id);
//     }
//   };

//   handleBackdropClick = evt => {
//     if (evt.currentTarget === evt.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const findImage = this.findImage();

//     return createPortal(
//       <Overlay onClick={this.handleBackdropClick}>
//         <ModalContainer>
//           <img src={findImage.largeImageURL} alt={findImage.tags} />
//         </ModalContainer>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }

Modal.propTypes = {
  images: PropTypes.array,
  id: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
