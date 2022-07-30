import { useState, useEffect } from 'react';
// import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from './App.styled';
import { Notification } from '../ImageGallery/ImageGallery.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import ImageError from 'components/ImageError';
import imagesAPI from '../../services/apiService';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [id, setId] = useState(null);
  const [loadMore, setLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const perPage = 12;

  useEffect(() => {
    getPhotos(searchQuery, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, page]);

  const getPhotos = async (query, page) => {
    if (!query) {
      return;
    }

    setIsLoading(true);

    try {
      const { hits, totalHits } = await imagesAPI(query, page);

      if (hits.length === 0) {
        setIsEmpty(true);
        setSearchQuery('');
      }

      setError(null);
      setImages(prevImage => [...prevImage, ...hits]);
      setLoadMore(page < Math.ceil(totalHits / perPage));

      if (page > 1) {
        pageScroll();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImages([]);
    setIsEmpty(false);
    setLoadMore(false);
  };

  const openModal = evt => {
    setShowModal(true);
    setId(evt.currentTarget.dataset.id);
  };

  const onLoadMoreBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const pageScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={handleFormSubmit} />

      {searchQuery ? (
        <ImageGallery onClick={openModal} images={images} />
      ) : (
        <Notification>Please enter a search term</Notification>
      )}

      {loadMore && <Button onClick={onLoadMoreBtnClick} page={page} />}

      {showModal && (
        <Modal onClose={closeModal} images={images} id={Number(id)} />
      )}

      {isLoading && <Loader />}

      {isEmpty && <ImageError message={`❌Not found this query `} />}

      {error && <ImageError message={`❌Server response error `} />}

      <ToastContainer position="top-center" autoClose={3000} rtl />
    </AppContainer>
  );
};

// ================ CLASS ================

// export class App extends Component {
//   state = {
//     images: [],
//     id: null,
//     searchQuery: '',
//     page: 1,
//     per_page: 15,
//     loadMore: false, // отображение кнопки LoadMore
//     isLoading: false, // для отображения - спинера
//     isEmpty: false, // пустой ли массив получен при запросе
//     error: null, // ошибка в catch
//     // showModal: false, // отображение модалки
//   };

//   componentDidUpdate(_, prevState) {
//     const { searchQuery, page } = this.state;
//     if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
//       this.getPhotos(searchQuery, page);
//     }
//   }

//   getPhotos = async (query, page) => {
//     if (!query) return;

//     this.setState({ isLoading: true });

//     try {
//       const { hits, totalHits } = await imagesAPI(query, page);

//       if (hits.length === 0) {
//         this.setState({ isEmpty: true });
//       }

//       this.setState(prevState => ({
//         images: [...prevState.images, ...hits],
//         loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
//       }));

//       if (page > 1) {
//         this.pageScroll();
//       }
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   handleFormSubmit = searchQuery => {
//     this.setState({
//       searchQuery,
//       page: 1,
//       images: [],
//       isEmpty: false,
//       loadMore: false,
//     });
//   };

//   loadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   openModal = evt => {
//     this.setState({
//       showModal: true,
//       id: evt.currentTarget.dataset.id,
//     });
//   };

//   closeModal = evt => {
//     this.setState({
//       showModal: false,
//     });
//   };

//   pageScroll = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   };

//   render() {
//     const {
//       searchQuery,
//       page,
//       loadMore,
//       showModal,
//       images,
//       id,
//       isLoading,
//       isEmpty,
//     } = this.state;

//     return (
//       <AppContainer>
//         <Searchbar onSubmit={this.handleFormSubmit} />

//         {searchQuery ? (
//           <ImageGallery onClick={this.openModal} images={images} />
//         ) : (
//           <Notification>Please enter a search term</Notification>
//         )}

//         {loadMore && <Button onClick={this.loadMore} page={page} />}

//         {showModal && (
//           <Modal onClose={this.closeModal} images={images} id={Number(id)} />
//         )}

//         {isLoading && <Loader />}

//         {isEmpty && <ImageError message={`Not found this query `} />}

//         <ToastContainer position="top-center" autoClose={3000} rtl />
//       </AppContainer>
//     );
//   }
// }
