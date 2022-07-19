import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from './App.styled';
import Searchbar from 'components/Searchbar';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
  };

  handleFormSubmit = searchQuery => {
    // console.log(searchQuery);
    this.setState({
      searchQuery,
    });
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer position="top-center" autoClose={3000} rtl />
      </AppContainer>
    );
  }
}
