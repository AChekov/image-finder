import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Grid } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer role="alert">
      <Grid color="#00BFFF" height={80} width={80} />
      Loading
    </LoaderContainer>
  );
};

export default Loader;
