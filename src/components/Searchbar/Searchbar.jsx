import { SearchbarContainer } from './Searchbar.styled';
import SearchbarForm from 'components/SearchbarForm';
import { PropTypes } from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarContainer>
      <SearchbarForm onSubmit={onSubmit} />
    </SearchbarContainer>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
