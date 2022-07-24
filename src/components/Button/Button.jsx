import { PropTypes } from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      Load more
    </Btn>
  );
};

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propType = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
