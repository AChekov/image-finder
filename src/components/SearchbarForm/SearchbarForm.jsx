import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { toast } from 'react-toastify';
import {
  SearchForm,
  SearchBtn,
  SearchLabel,
  SearchInput,
} from './SearchbarForm.styled';

class SearchbarForm extends Component {
  state = {
    searchQuery: '',
  };

  handleValueChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.error('Enter a search term');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchBtn type="submit">
          <SearchLabel>Search</SearchLabel>
        </SearchBtn>

        <SearchInput
          name="searchQuery"
          type="text"
          autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          value={this.state.searchQuery}
          onChange={this.handleValueChange}
        />
      </SearchForm>
    );
  }
}

SearchbarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchbarForm;
