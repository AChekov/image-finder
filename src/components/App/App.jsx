import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from './App.styled';
import { Notification } from '../ImageGallery/ImageGallery.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    showModal: false,
  };

  handleFormSubmit = searchQuery => {
    // console.log(searchQuery);
    this.setState({
      searchQuery,
    });
  };

  loadMode = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = evt => {
    this.state({ showModal: true, id: evt.currentTarget.dataset.is });
  };

  closeModal = evt => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { searchQuery, page, loadMore, showModal } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer position="top-center" autoClose={3000} rtl />

        {searchQuery ? (
          <ImageGallery openModal={this.openModal} />
        ) : (
          <Notification>Please enter a search term</Notification>
        )}
        {loadMore && (
          <button onClick={this.loadMode} page={page}>
            load more
          </button>
        )}
        {showModal}
      </AppContainer>
    );
  }
}
