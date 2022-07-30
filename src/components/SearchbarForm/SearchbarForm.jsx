// import { Component } from 'react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import {
  SearchForm,
  SearchBtn,
  SearchLabel,
  SearchInput,
} from './SearchbarForm.styled';

export default function SearchbarForm({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleValueChange = evt => {
    setSearchQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Enter a search term');
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchBtn type="submit">
        <FcSearch size="30" />
        <SearchLabel>Search</SearchLabel>
      </SearchBtn>

      <SearchInput
        name="searchQuery"
        type="text"
        autocomplete="off"
        // autofocus
        placeholder="Search images and photos"
        value={searchQuery}
        onChange={handleValueChange}
      />
    </SearchForm>
  );
}

SearchbarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// ================ CLASS ================
// class SearchbarForm extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handleValueChange = evt => {
//     this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();

//     if (this.state.searchQuery.trim() === '') {
//       toast.error('Enter a search term');
//       return;
//     }

//     this.props.onSubmit(this.state.searchQuery);
//     this.setState({ searchQuery: '' });
//   };

//   render() {
//     return (
//       <SearchForm onSubmit={this.handleSubmit}>
//         <SearchBtn type="submit">
//           <SearchLabel>Search</SearchLabel>
//         </SearchBtn>

//         <SearchInput
//           name="searchQuery"
//           type="text"
//           autocomplete="off"
//           // autofocus
//           placeholder="Search images and photos"
//           value={this.state.searchQuery}
//           onChange={this.handleValueChange}
//         />
//       </SearchForm>
//     );
//   }
// }

// SearchbarForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default SearchbarForm;
