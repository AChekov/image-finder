import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Grid } from 'react-loader-spinner';
import { Loader } from './Loader.styled';

export default function LoaderCont() {
  return (
    <Loader role="alert">
      <Grid color="#00BFFF" height={80} width={80} />
      Loading
    </Loader>
  );
}
